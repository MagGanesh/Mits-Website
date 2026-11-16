// Every fact on every variant comes from here. Source: the live site
// (as first published), PRODUCT.md and her Nextdoor page.
export const name = 'Future Foundations Tutoring';
export const tutor = 'Mithusha';
export const phone = '07518 327252';
export const tel = 'tel:07518327252';
export const whatsapp =
  'https://wa.me/447518327252?text=Hi%20Mithusha%2C%20I%20found%20your%20website%20and%20would%20like%20to%20ask%20about%20tutoring.';
export const nextdoor = 'https://nextdoor.co.uk/page/mithusha-tutor/';
export const u = (path = '') => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path}`;

export const h1 = 'English, Maths & 11+ tutor in Stanmore & Harrow';
export const promise = 'Every child deserves to excel.';
export const intro =
  "I'm Mithusha, a qualified UK teacher with over 10 years in classrooms. I teach one child at a time, from first phonics to 11+ and GCSE, at my home in Stanmore, at yours anywhere in Harrow, or online.";

export const credentials = [
  { title: 'PGCE with QTS', detail: 'Qualified Teacher Status' },
  { title: '10+ years', detail: 'teaching in UK classrooms' },
  { title: 'Enhanced DBS', detail: 'checked, safeguarding verified' },
  { title: 'BSc Medical Genetics', detail: 'Queen Mary University of London' },
];

export const about = [
  "I'm Mithusha, an experienced UK school teacher based in Stanmore. I hold a BSc in Medical Genetics from Queen Mary University of London and a PGCE with Qualified Teacher Status.",
  'After more than 10 years in UK classrooms, I know what each stage asks of a child and how to build the confidence they need to meet it. Every session is structured, purposeful and planned for your child.',
];

// Ordered youngest first: primary and 11+ families lead (PRODUCT.md).
export const stages = [
  {
    id: 'phonics', label: 'Phonics & early reading', ages: 'Ages 4–6',
    text: 'Strong phonics, reading and early English from the very start.',
    href: `english-tutor-stanmore-harrow/`,
  },
  {
    id: 'primary', label: 'KS1 & KS2', ages: 'Ages 5–11',
    text: 'Reading comprehension, spelling, grammar and creative writing, alongside core Maths and Science.',
    href: `maths-tutor-stanmore-harrow/`,
  },
  {
    id: 'sats', label: 'SATs', ages: 'Year 6',
    text: 'Preparation for the Year 6 SATs in English and Maths.',
    href: `english-tutor-stanmore-harrow/`,
  },
  {
    id: 'entrance', label: '4+, 7+, 8+ & 11+', ages: 'School entrance',
    text: 'Maths and English preparation, including comprehension and creative writing, for independent and grammar school entrance.',
    href: `11-plus-tutor-stanmore-harrow/`,
  },
  {
    id: 'ks3', label: 'KS3', ages: 'Ages 11–14',
    text: 'Maths and Science, bridging primary to secondary before GCSE begins.',
    href: `maths-tutor-stanmore-harrow/`,
  },
  {
    id: 'gcse', label: 'GCSE', ages: 'Ages 14–16',
    text: 'English Language and Literature, Maths and Biology, with a focus on exam technique and mark schemes.',
    href: `gcse-tutor-stanmore-harrow/`,
  },
];

export const fees = [
  { where: 'At my home in Stanmore', price: '£40', unit: 'per hour', note: 'Stanmore Place, HA7' },
  { where: 'Online', price: '£40', unit: 'per hour', note: 'Anywhere in the UK' },
  { where: 'At your home', price: 'From £60', unit: 'per hour', note: 'Anywhere in the London Borough of Harrow' },
];
export const hours = 'Evenings and weekends · term time and school holidays';

export const areas = [
  'Stanmore', 'Canons Park', 'Edgware', 'Harrow', 'Harrow on the Hill', 'Harrow Weald', 'Wealdstone', 'Belmont',
  'Kenton', 'Queensbury', 'Pinner', 'Hatch End', 'North Harrow', 'South Harrow', 'Rayners Lane', 'Headstone',
];

export const nextdoorStats = { recommendations: 9, faves: 27 };
export const featured = {
  name: 'Marsha L.', area: 'North Kenton', tag: 'Maths · GCSE',
  text: 'Before starting tuition, my daughter lacked confidence in her maths abilities. Mithusha has a wonderful way of explaining things that makes everything much easier to understand. She now enjoys maths much more and feels far better prepared for her GCSEs.',
};
export const reviews = [
  { name: 'Vythi P.', area: 'Queensbury', tag: '11+ · SATs', text: 'She breaks down big topics into bite-sized steps, which really boosts confidence. My child has enjoyed learning so much more because of her.' },
  { name: 'Arwa A.', area: 'Marylebone', tag: 'Primary', text: 'She has such a lovely way of teaching and makes the sessions engaging and enjoyable. She genuinely enjoys her lessons and looks forward to them!' },
  { name: 'Roshni K.', area: 'West Stanmore', tag: 'Maths', text: 'Mithusha has been a great maths tutor for our daughter. Her confidence has grown and her ability in maths has greatly improved.' },
  { name: 'Chandni D.', area: 'South Stanmore', tag: 'Weekly lessons', text: 'Brilliant tutor, highly recommend. My daughter has been attending weekly lessons with Mithusha and we see a big difference in her.' },
  { name: 'Son P.', area: 'North Kenton', tag: 'Recommended', text: 'Wonderful tutor, she is kind and passionate about teaching. I highly recommend her.' },
  { name: 'Umesh G.', area: 'Canons Park', tag: 'Recommended', text: 'If anyone in the Stanmore area is searching for an excellent tutor, get in touch with Mithusha!' },
];

export const faq = [
  ['How much do lessons cost?', '£40 an hour at my home in Stanmore or online, and from £60 an hour when I come to you anywhere in Harrow.'],
  ['Which ages do you teach?', 'From Reception phonics through KS1 and KS2, SATs, 4+ to 11+ entrance, KS3 and GCSE.'],
  ['Are you DBS checked?', 'Yes. I hold an Enhanced DBS check and a PGCE with Qualified Teacher Status.'],
  ['How do we get started?', 'Call or WhatsApp me on 07518 327252 for a no-obligation chat. I’ll ask about your child, their school and their goals, then suggest a plan.'],
] as const;
