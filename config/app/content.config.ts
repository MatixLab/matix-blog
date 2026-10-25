import type { AstroUserConfig } from 'astro'
import { markdownConfig } from '#/config/markdown/shiki.config'

export const contentConfig = {
    experimental: {
        contentIntellisense: true
    },
    image: {
        remotePatterns: [{ protocol: 'https' }]
  },
  ...markdownConfig
} satisfies Pick<AstroUserConfig, 'experimental' | 'image' | 'markdown'>
