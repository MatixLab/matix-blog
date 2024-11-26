import type { Resource, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'AnthonyZhu',
  name: 'AnthonyZhu',
  title: 'Anthony\'s Blog',
  description: 'An modern example app built using Astro & shadcn-ui. Inspired by taxonomy.',
  url: 'https://www.huakucha.top',
  ogImage: 'https://www.huakucha.top/og.jpg',
  links: {
    twitter: 'https://twitter.com/huakucha10',
    github: 'https://github.com/MagicalZhu',
  },
  pagination: {
    pageSize: 5,
    itemMaxNum: 5,
  },
  home: {
    postNum: 5,
  },
}

export const resources: Resource[] = [
  {
    name: 'Apps & Tools',
    routeName: 'tools',
    items: [],
  },
  {
    name: 'Design',
    routeName: 'design',
    items: [],
  },
  {
    name: 'Reading',
    routeName: 'reading',
    items: [],
  },
  {
    name: 'Sites',
    routeName: 'sites',
    items: [],
  },
]
