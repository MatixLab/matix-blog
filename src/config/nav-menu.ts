import type { NavMenuConfig } from '@/types'
import blogDb from '@/assets/images/examples/blog-db.jpg'
import changelog from '@/assets/images/examples/changelog.jpg'
import landing from '@/assets/images/examples/landing.jpg'
import staticBlog from '@/assets/images/examples/static-blog.jpg'

export const navMenuConfig: NavMenuConfig = {
  portfolio: [
    {
      title: 'Portfolio',
      items: [
        {
          title: 'Landing',
          href: '/landing',
          // description: 'A landing page template',
          image: landing,
        },
        {
          title: 'Timeline',
          href: '/timeline',
          // description: 'A reproduction of Starlog template with Tailwind CSS.',
          image: changelog,
        },
        {
          title: 'Discovery',
          href: '/discovery',
          // description: 'Discovery page',
          image: blogDb,
          launched: true,
        },
        {
          title: 'Bookmarks',
          href: '/bookmarks',
          // description: 'Fetch anime content',
          image: blogDb,
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: 'Post',
      href: '/blog',
      description: 'A Markdown/MDX blog built using Content Collections.',
      image: staticBlog,
    },
    {
      title: 'Weekly',
      href: '/weekly',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: staticBlog,
    },
    {
      title: 'Collection',
      href: '/collection/tools',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: staticBlog,
    },
  ],
}
