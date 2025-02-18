import type { CreditItem } from '@/types'

const Colophon: CreditItem[] = [
  { title: 'Netlify', url: 'https://www.netlify.com', desc: 'Hosting On' },
  { title: 'Astro', url: 'https://astro.build', desc: 'Built With' },
]
const Inspiration: CreditItem[] = [
  {
    title: 'Fabian Schultz',
    url: 'https://www.fabianschultz.com',
    desc: 'Idea of simple home page is inspired from',
  },
  {
    title: 'Hiran Venugopalan',
    url: 'https://hiran.in/index.html',
    desc: 'Credits page and uses page is inspired from',
  },
  {
    title: 'Vorillaz',
    url: 'https://www.vorillaz.com',
    desc: 'Site typography is inspired from',
  },
]

export const credits = {
  Colophon,
  Inspiration,
}
