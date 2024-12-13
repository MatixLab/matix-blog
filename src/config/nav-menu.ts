import type { NavMenuConfig } from '@/types'
import blogDb from '@/assets/images/examples/blog-db.jpg'
import changelog from '@/assets/images/examples/changelog.jpg'
import staticBlog from '@/assets/images/examples/static-blog.jpg'

export const navMenuConfig: NavMenuConfig = {
  portfolio: [
    {
      title: 'Portfolio',
      items: [
        {
          title: 'Timeline',
          href: '/timeline',
          image: changelog,
        },
        {
          title: 'Discovery',
          href: '/discovery',
          image: blogDb,
          launched: true,
        },
      ],
    },
  ],
  links: [
    {
      title: 'Post',
      href: '/post',
      description: 'A Markdown/MDX blog built using Content Collections.',
      image: staticBlog,
    },
    {
      title: 'Short',
      href: '/short',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: staticBlog,
    },
    {
      title: 'Resource',
      href: '/resource/tools',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: staticBlog,
    },
  ],
}
