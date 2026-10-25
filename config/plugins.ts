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
  fontStyle: true,
  name: 'vercel',
  variableDefaults: {},
  variablePrefix: '--shiki-',
})

export const rehypePlugins: RehypePlugins = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'prepend',
      properties: {
        ariaLabel: 'Link to section',
        className: ['subheading-anchor'],
      },
    },
  ],
  [
    rehypeExternalLinks,
    {
      rel: ['nofollow', 'noreferrer', 'noopener'],
      target: '_blank',
    },
  ],
]

function parseMetaBlock(metaRaw?: string) {
  if (!metaRaw)
    {return null}
  const titleMatch = /title="([^"]*)"/.exec(metaRaw)
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
