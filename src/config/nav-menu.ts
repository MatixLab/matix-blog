import type { NavMenuConfig } from '@/types'

export const navMenuConfig: NavMenuConfig = {
  portfolio: [
    {
      title: 'Portfolio',
      items: [
        {
          title: 'Timeline',
          href: '/timeline',
        },
      ],
    },
  ],
  links: [
    {
      title: 'Post',
      href: '/post',
      description: 'A Markdown/MDX blog built using Content Collections.',
    },
    {
      title: 'Short',
      href: '/short',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
    },
    {
      title: 'Resource',
      href: '/resource/tools',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
    },
  ],
}
