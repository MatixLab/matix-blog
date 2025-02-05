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
      title: 'Time',
      items: [
        { title: 'Timeline', href: '/timeline' },
      ],
    },
  ],
  links: [
    { title: 'Post', href: '/post' },
    { title: 'Short', href: '/short' },
    { title: 'Projects', href: '/projects' },
    { title: 'Uses', href: '/uses' },
  ],
}
