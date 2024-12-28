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
  transformerNotationFocus,
} from '@shikijs/transformers'
import icon from 'astro-icon'
import {
  defineConfig,
} from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'

import { schema } from './env.schema'

/**
 * https://astro.build/config
 */
export default defineConfig({
  site: 'https://huakucha.top/',

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
        'simple-icons': ['github', 'x', 'bluesky', 'notion', 'mailgun'],
      },
    }),
    partytown({
      config: {
        debug: false,
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
        transformerNotationFocus(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
        {
          pre(node) {
            node.properties.__lang__ = this.options.lang
            node.properties.__rawString__ = this.source
          },
        },
      ],
    },
    rehypePlugins: [
      rehypeSlug,
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
  },

  env: {
    schema,
    validateSecrets: false,
  },
  adapter: netlify({
    cacheOnDemandPages: false,
  }),
})
