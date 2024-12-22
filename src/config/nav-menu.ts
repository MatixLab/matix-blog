import type { NavMenuConfig } from '@/types'

export const navMenuConfig: NavMenuConfig = {
  collective: [
    {
      title: 'Share',
      items: [
        { title: 'Resource', href: '/resource/tools' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { title: 'Timeline', href: '/timeline' },
      ],
    },
  ],
  links: [
    { title: 'Post', href: '/post' },
    { title: 'Short', href: '/short' },
    { title: 'Uses', href: '/uses' },
  ],
}
