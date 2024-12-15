import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import playformCompress from '@playform/compress'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import icon from 'astro-icon'
import {
  defineConfig,
  passthroughImageService,
} from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'

import { schema } from './env.schema'

/**
 * https://astro.build/config
 */
export default defineConfig({
  site: 'http://localhost:4321/',

  integrations: [
    db(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    /**
     *  https://docs.astro.build/zh-cn/guides/integrations-guide/sitemap
     */
    sitemap(),
    react(),
    icon({
      include: {
        'lucide': [
          'laptop',
          'settings',
          'search',
        ],
        'simple-icons': ['github', 'x', 'bluesky'],
      },
    }),
    partytown({
      config: {
        debug: true,
        forward: ['dataLayer.push'],
      },
    }),
    playformCompress({
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],

  devToolbar: {
    enabled: false,
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationFocus(),
        transformerNotationErrorLevel(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
        {
          pre(node) {
            node.properties.__rawString__ = this.source
          },
        },
      ],
    },
    rehypePlugins: [
      rehypeSlug,
      // rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
            ariaHidden: 'true',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
          properties: {
            className: ['link'],
          },
          content: { type: 'text', value: ' ↗' },
        },
      ],
    ],
  },

  image: {
    remotePatterns: [{
      protocol: 'https',
    }],
  },

  experimental: {
    contentIntellisense: true,
    responsiveImages: true,
    svg: true,
  },

  vite: {
    optimizeDeps: {
      include: ['lucide-react'],
    },
    ssr: {
      external: ['node:buffer'],
    },
  },

  env: {
    schema,
    validateSecrets: false,
  },
  adapter: netlify(),
})
