// Public address helpers. src/seo.json writes every absolute URL as {SITE}...
export const publicUrl = __PUBLIC_URL__;
export const abs = (v: string) => v.replaceAll('{SITE}', publicUrl);
export const paths = ['', 'english-tutor-stanmore-harrow/', 'maths-tutor-stanmore-harrow/', '11-plus-tutor-stanmore-harrow/', 'gcse-tutor-stanmore-harrow/', 'home-tutor-harrow/'];
