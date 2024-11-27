import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import MillionLint from '@million/lint'
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
import {
  defineConfig,
  passthroughImageService,
} from 'astro/config'
import icon from 'astro-icon'
import purgecss from 'astro-purgecss'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'

/**
 * https://astro.build/config
 */
export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    /**
     *  https://docs.astro.build/zh-cn/guides/integrations-guide/sitemap
     */
    sitemap(),
    react(),
    // MillionLint.astro(),
    icon({
      include: {
        'lucide': [
          'laptop',
          'settings',
          'search',
        ],
        'simple-icons': ['github', 'x'],
      },
    }),
    partytown({
      config: {
        debug: true,
        forward: ['dataLayer.push'],
      },
    }),
    playformCompress({
      HTML: false,
      Image: false,
      JavaScript: false,
      SVG: false,
    }),
    purgecss(
      {
        content: [
          './src/**/*.{astro,js,jsx,ts,tsx}',
        ],
      },
    ),
  ],
  /**
   * https://docs.astro.build/zh-cn/basics/rendering-modes/
   */
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
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
    service: passthroughImageService(),
  },
  experimental: {
    contentIntellisense: true,
    directRenderScript: true,
  },
  vite: {
    optimizeDeps: {
      include: ['lucide-react'],
    },
    ssr: {
      external: ['node:buffer'],
    },
  },
})
