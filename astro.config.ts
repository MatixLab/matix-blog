import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { transformerCopyButton } from '@rehype-pretty/transformers'
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
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
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
    icon({
      include: {
        'lucide': [
          'laptop',
          'settings',
          'search',
        ],
        'mdi': ['*'],
        'simple-icons': ['*'],
      },
    }),
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
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeSlug,
      // rehypeHeadingIds,
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: 'github-dark-default',
          defaultLang: {
            block: 'plaintext',
            inline: 'plaintext',
          },
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            transformerNotationFocus(),
            transformerNotationErrorLevel(),
            transformerMetaHighlight(),
            transformerMetaWordHighlight(),
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 3_000,
            }),
          ],
        },
      ],
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
    ssr: {
      external: ['node:buffer'],
    },
  },
})
