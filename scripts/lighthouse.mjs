// Lighthouse gate for preview sites (thresholds: knowledge/evals/site-quality.md).
// Builds nothing: run `npm run build` first. Serves dist/ with `astro preview`,
// audits mobile + desktop for every URL given (default: /), writes JSON to
// .lighthouse/, prints scores, and exits 1 if any category is below MIN.
//
//   node scripts/lighthouse.mjs [/path ...]        MIN=90 by default
//
// On the Axivon Windows VM only the Playwright headless shell launches, so
// CHROME_PATH is auto-detected from %LOCALAPPDATA%\ms-playwright if unset.
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MIN = Number(process.env.MIN || 90);
const PORT = 4321;
const paths = process.argv.slice(2).length ? process.argv.slice(2) : ['/'];

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const root = process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, 'ms-playwright');
  if (!root || !existsSync(root)) return undefined;
  const shell = readdirSync(root).filter((d) => d.startsWith('chromium_headless_shell-')).sort().pop();
  const exe = shell && join(root, shell, 'chrome-headless-shell-win64', 'chrome-headless-shell.exe');
  return exe && existsSync(exe) ? exe : undefined;
}

const run = (cmd, args, opts = {}) =>
  new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { shell: true, ...opts });
    let out = '';
    p.stdout?.on('data', (d) => (out += d));
    p.stderr?.on('data', () => {});
    p.on('exit', (code) => (code === 0 ? resolve(out) : reject(new Error(`${cmd} exited ${code}`))));
  });

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { shell: true, stdio: 'ignore' });
// Kill the whole preview process tree and wait for it, or the port stays bound.
const stop = () =>
  new Promise((resolve) => {
    if (process.platform !== 'win32') { server.kill(); return resolve(); }
    spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' }).on('exit', resolve);
  });

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(`http://localhost:${PORT}/`)).status < 500) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('astro preview did not start');
}

const chrome = findChrome();
const env = { ...process.env, ...(chrome ? { CHROME_PATH: chrome } : {}) };
mkdirSync('.lighthouse', { recursive: true });
let failed = false;

try {
  await waitForServer();
  for (const path of paths) {
    for (const preset of ['mobile', 'desktop']) {
      const url = `http://localhost:${PORT}${path}`;
      const args = [
        'lighthouse', `"${url}"`, '--output=json', '--output-path=stdout', '--quiet',
        '--chrome-flags="--headless --no-sandbox"',
        ...(preset === 'desktop' ? ['--preset=desktop'] : []),
      ];
      const json = JSON.parse(await run('npx', args, { env }));
      const name = `${path.replace(/[^a-z0-9]+/gi, '_') || 'home'}-${preset}`;
      writeFileSync(join('.lighthouse', `${name}.json`), JSON.stringify(json));
      const scores = Object.fromEntries(
        Object.entries(json.categories).map(([k, v]) => [k, Math.round(v.score * 100)]),
      );
      // SEO is capped by the deliberate noindex on previews; judge it without that audit.
      const seoAudits = json.categories.seo.auditRefs.filter((r) => r.weight > 0 && r.id !== 'is-crawlable');
      const seoScore = seoAudits.reduce((s, r) => s + (json.audits[r.id].score ?? 1) * r.weight, 0) /
        seoAudits.reduce((s, r) => s + r.weight, 0);
      scores['seo (excl. noindex)'] = Math.round(seoScore * 100);
      delete scores.seo;
      const a = json.audits;
      const low = Object.entries(scores).filter(([, v]) => v < MIN);
      if (low.length) failed = true;
      console.log(
        `${path} [${preset}]`, JSON.stringify(scores),
        `LCP ${a['largest-contentful-paint'].displayValue}, TBT ${a['total-blocking-time'].displayValue}, CLS ${a['cumulative-layout-shift'].displayValue}`,
        low.length ? `  <-- below ${MIN}: ${low.map(([k]) => k).join(', ')}` : '',
      );
    }
  }
} finally {
  await stop();
}
process.exit(failed ? 1 : 0);
