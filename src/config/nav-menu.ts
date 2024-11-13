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
          description: 'A landing page template with differents sections.',
          image: landing,
        },
        {
          title: 'Anime List',
          href: '/animes',
          description:
            'Fetch anime content from an graphql endpoint. Tabs component.',
          image: blogDb,
          disabled: true,
        },
        {
          title: 'Discovery',
          href: '/discovery',
          description:
            'Blog built using Astro DB. With categories, views & likes.',
          image: blogDb,
          launched: true,
        },
      ],
    },
  ],
  links: [
    {
      title: 'Blog',
      href: '/blog',
      description: 'A Markdown/MDX blog built using Content Collections.',
      image: staticBlog,
    },
    {
      title: 'Timeline',
      href: '/timeline',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: changelog,
    },
    {
      title: 'Weekly',
      href: '/weekly',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: staticBlog,
    },
  ],
}
