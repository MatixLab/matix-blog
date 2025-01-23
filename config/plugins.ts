import type { RehypePlugins, ShikiConfig } from 'astro'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import { createCssVariablesTheme } from 'shiki/core'

export const customTheme = createCssVariablesTheme({
  name: 'anthonyZhu',
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
]

export const shikiConfig: ShikiConfig = {
  theme: customTheme,
  transformers: [
    transformerMetaHighlight({
      className: 'has-highlight',
    }),
    transformerMetaWordHighlight(),
    {
      pre(node) {
        node.properties.__meta__ = this.options.meta?.__raw
        node.properties.__rawString__ = this.source
      },
    },
  ],
}
