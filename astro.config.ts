import { 
  defineConfig,
  passthroughImageService
} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerMetaHighlight,
  transformerRenderWhitespace,
  transformerNotationHighlight,
  transformerMetaWordHighlight,
  transformerNotationErrorLevel,
  transformerCompactLineOptions,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'


/**
 * @see  https://astro.build/config
 */
export default defineConfig({
  site: 'https://huakucha.top',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      optimize: true,
    }),
    sitemap(),
    react(),
    icon()
  ],
  // https://docs.astro.build/zh-cn/basics/rendering-modes/
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
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
          keepBackground: true,
          theme: 'github-dark-default',
          defaultLang: {
            block: "plaintext",
            inline: "plaintext",
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
          behavior: 'wrap',
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [
        rehypeExternalLinks, {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
    ]
  },
  image: {
    service: passthroughImageService()
  },
  vite: {
    ssr: {
      external: ['node:buffer'],
    }
  },
})