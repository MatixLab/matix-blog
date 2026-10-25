import type { AstroUserConfig } from 'astro'
import { satteri } from "@astrojs/markdown-satteri"

export const markdownConfig = {
  markdown: {
    processor: satteri({
      features: {
        headingAttributes: true
      }
    }),
    shikiConfig: {
      themes: {
        dark: 'vesper',
        light: 'vitesse-light',
      }
    }
  }
} satisfies Pick<AstroUserConfig, 'markdown'>
