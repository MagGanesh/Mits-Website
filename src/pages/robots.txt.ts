import { publicUrl } from '../site';
export const GET = () => new Response(`User-agent: *\nAllow: /\n\nSitemap: ${publicUrl}sitemap.xml\n`);
