import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'AnthonyZhu',
  title: 'Anthony\'s Blog',
  description: 'A Full Stack Developer.',
  url: 'https://www.huakucha.top',
  repoUrl: 'https://github.com/MatixLab/matix-blog',
  ogImage: 'https://www.huakucha.top/og.jpg',
  links: {
    twitter: 'https://twitter.com/huakucha10',
    github: 'https://github.com/MagicalZhu',
    blueSky: 'https://bsky.app/profile/anthonyzhu.bsky.social',
    notion: 'https://huakucha.notion.site/1538b781a49980dfa194f936fb7f2422',
    email: 'hi@huakucha.top',
  },
  // pagination
  pagination: {
    pageSize: 2,
    pageBtnNum: 5,
  },
  home: {
    displayNumber: 5,
  },
}
