import type { NavMenuConfig } from '@/types'
import about from '@/assets/images/examples/about.jpg'
import blogDb from '@/assets/images/examples/blog-db.jpg'
import changelog from '@/assets/images/examples/changelog.jpg'
import documentation from '@/assets/images/examples/documentation.jpg'
import landing from '@/assets/images/examples/landing.jpg'
import staticBlog from '@/assets/images/examples/static-blog.jpg'

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: 'Pages',
      items: [
        {
          title: 'Landing',
          href: '/landing',
          description: 'A landing page template with differents sections.',
          image: landing,
        },
        {
          title: 'Docs',
          href: '/docs/getting-started',
          description:
            'A Markdown/MDX docs site built using Content Collections.',
          image: documentation,
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
          title: 'Blog DB',
          href: '/blog-db',
          description:
            'Blog built using Astro DB. With categories, views & likes.',
          image: blogDb,
          launched: true,
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
      title: 'About',
      href: '/about',
      description: 'A simple page with a masonry gallery and little text.',
      image: about,
    },
    {
      title: 'Timeline',
      href: '/timeline',
      description: 'A reproduction of Starlog template with Tailwind CSS.',
      image: changelog,
    },
  ],
}
