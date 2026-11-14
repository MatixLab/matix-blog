import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri'
import { autolinkHeadingsPlugin } from './plugins/auto-link-heading.plugin'
import { copyCodePlugin } from './plugins/copy-code.plugin'
import {
    transformerNotationDiff,
    transformerMetaHighlight,
    transformerMetaWordHighlight
} from '@shikijs/transformers'
import type { AstroUserConfig } from 'astro'

export const markdownConfig = {
    markdown: {
        processor: satteri({
            hastPlugins: [satteriHeadingIdsPlugin(), autolinkHeadingsPlugin, copyCodePlugin]
        }),
        shikiConfig: {
            themes: {
                dark: 'dracula-soft',
                light: 'vitesse-light'
            },
            transformers: [
                transformerNotationDiff(),
                transformerMetaHighlight({
                    className: 'has-highlight'
                }),
                transformerMetaWordHighlight(),
                {
                    pre(node) {
                        node.properties.__rawString__ = this.source
                    }
                }
            ]
        }
    }
} satisfies Pick<AstroUserConfig, 'markdown'>
