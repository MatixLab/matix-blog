import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerCompactLineOptions,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRenderWhitespace,
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
    mdx({
      optimize: true,
    }),
    /**
     *  https://docs.astro.build/zh-cn/guides/integrations-guide/sitemap
     */
    sitemap(),
    react(),
    icon(),
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
    shikiConfig: {
      transformers: [
        transformerNotationDiff(),
        transformerNotationFocus(),
        transformerMetaHighlight(),
        transformerRenderWhitespace(),
        transformerNotationHighlight(),
        transformerMetaWordHighlight(),
        transformerNotationErrorLevel(),
        transformerCompactLineOptions(),
        transformerNotationWordHighlight(),
      ],
    },
    rehypePlugins: [
      // rehypeHeadingIds,
      rehypeSlug,
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
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
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
