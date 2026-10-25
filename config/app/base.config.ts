import type { AstroUserConfig } from 'astro'
import { deployConfig } from './deploy.config'
import { contentConfig } from './content.config'

export const baseConfig = {
  ...deployConfig,
  ...contentConfig,
    env: {
        validateSecrets: false
    },
    prefetch: true,
    session: false,
    site: 'https://antzhu.com/',
    trailingSlash: 'ignore',
} satisfies Omit<AstroUserConfig, 'integrations' | 'vite'>
