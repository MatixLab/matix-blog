import type { NavMenuConfig } from '@/types'

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: 'Pages',
      items: [
        {
          title: 'Landing',
          href: '/landing',
          description: 'A landing page template with differents sections.',
          image: '/images/examples/landing.jpg',
        },
        {
          title: 'Changelog',
          href: '/releases',
          description: 'A reproduction of Starlog template with Tailwind CSS.',
          image: '/images/examples/changelog.jpg',
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: 'Examples',
      items: [
        {
          title: 'Static Blog',
          href: '/blog',
          description: 'A Markdown/MDX blog built using Content Collections.',
          image: '/images/examples/static-blog.jpg',
        },
        {
          title: 'Docs',
          href: '/docs/getting-started',
          description:
            'A Markdown/MDX docs site built using Content Collections.',
          image: '/images/examples/documentation.jpg',
        },
        {
          title: 'Anime List',
          href: '/animes',
          description:
            'Fetch anime content from an graphql endpoint. Tabs component.',
          image: '/images/examples/blog-db.jpg',
          disabled: true,
        },
        {
          title: 'Blog DB',
          href: '/blog-db',
          description:
            'Blog built using Astro DB. With categories, views & likes.',
          image: '/images/examples/blog-db.jpg',
          launched: true,
        },
      ],
    },
  ],
  links: [
    {
      title: 'Profile',
      href: '/about',
      description: 'A simple page with a masonry gallery and little text.',
      image: '/images/examples/about.jpg',
    },
  ],
}
