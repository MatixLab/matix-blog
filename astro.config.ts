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
import { visit } from 'unist-util-visit'

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
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') {
              return
            }
            node.__rawString__ = codeEl.children?.[0].value
          }
        })
      },
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
            transformerCopyButton(),
          ],
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
              return
            }
            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') {
              return
            }
            preElement.properties.__withMeta__ = node.children.at(0).tagName === 'code'
            preElement.properties.__rawString__ = node.__rawString__
          }
        })
      },
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
