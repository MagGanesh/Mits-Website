import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
const [svgPath, out] = process.argv.slice(2);
const svg = readFileSync(svgPath);
const png = (s) => sharp(svg, { density: 1200 }).resize(s, s).png().toBuffer();
for (const [name, s] of [['favicon-48.png', 48], ['favicon-96.png', 96], ['favicon-192.png', 192], ['apple-touch-icon.png', 180]]) writeFileSync(`${out}/${name}`, await png(s));
// favicon.ico with 16/32/48 PNG frames
const frames = await Promise.all([16, 32, 48].map(png));
const head = Buffer.alloc(6 + 16 * frames.length); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(frames.length, 4);
let off = head.length;
frames.forEach((f, i) => { const s = [16, 32, 48][i], e = 6 + 16 * i; head.writeUInt8(s, e); head.writeUInt8(s, e + 1); head.writeUInt8(0, e + 2); head.writeUInt8(0, e + 3); head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6); head.writeUInt32LE(f.length, e + 8); head.writeUInt32LE(off, e + 12); off += f.length; });
writeFileSync(`${out}/favicon.ico`, Buffer.concat([head, ...frames]));
console.log('ok');
