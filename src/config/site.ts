import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'Anthony Zhu',
  title: 'Anthony Zhu\'s Blog',
  description: 'A Full Stack Developer.',
  url: 'https://www.antzhu.com',
  repoUrl: 'https://github.com/MatixLab/matix-blog',
  slogan: 'Becoming is better than being.',
  ogImage: 'https://www.antzhu.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/huakucha10',
    github: 'https://github.com/MagicalZhu',
    blueSky: 'https://bsky.app/profile/anthonyzhu.bsky.social',
    notion: 'https://huakucha.notion.site/1538b781a49980dfa194f936fb7f2422',
    email: 'hi@antzhu.com',
  },
  // pagination
  pagination: {
    pageSize: 10,
  },
  home: {
    displayNumber: 5,
  },
}
