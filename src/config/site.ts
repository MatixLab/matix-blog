import type { SidebarNavItem, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'AnthonyZhu',
  name: 'AnthonyZhu',
  description: 'An modern example app built using Astro & shadcn-ui. Inspired by taxonomy.',
  url: 'https://www.huakucha.top',
  ogImage: 'https://www.huakucha.top/og.jpg',
  links: {
    twitter: 'https://twitter.com/huakucha10',
    github: 'https://github.com/MagicalZhu',
  },
  page: {
    pageSize: 5,
    itemMaxNum: 5,
  },
}

// footer config
export const footerLinks: SidebarNavItem[] = [
  {
    title: 'Company',
    items: [
      { title: 'About', href: '#' },
      { title: 'Enterprise', href: '#' },
      { title: 'Partners', href: '#' },
      { title: 'Jobs', href: '#' },
    ],
  },
  {
    title: 'Product',
    items: [
      { title: 'Security', href: '#' },
      { title: 'Customization', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Docs',
    items: [
      { title: 'Introduction', href: '#' },
      { title: 'Installation', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Code Blocks', href: '#' },
    ],
  },
]
