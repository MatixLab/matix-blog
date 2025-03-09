import type { RehypePlugins, ShikiConfig } from 'astro'
import {
  transformerNotationDiff,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import { createCssVariablesTheme } from 'shiki/core'

const vercelTheme = createCssVariablesTheme({
  name: 'vercel',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

export const rehypePlugins: RehypePlugins = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'prepend',
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
]

function parseMetaBlock(metaRaw?: string) {
  if (!metaRaw)
    return null
  const titleMatch = metaRaw.match(/title="([^"]*)"/)
  return titleMatch?.[1] ?? null
}

export const shikiConfig: ShikiConfig = {
  theme: vercelTheme,
  transformers: [
    transformerNotationDiff(),
    transformerMetaHighlight({
      className: 'has-highlight',
    }),
    transformerMetaWordHighlight(),
    {
      pre(node) {
        node.properties.__lang__ = this.options.lang
        node.properties.__title__ = parseMetaBlock(this.options.meta?.__raw)
        node.properties.__rawString__ = this.source
      },
    },
  ],
}
