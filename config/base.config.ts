import type { AstroUserConfig } from 'astro'
import { fontProviders } from 'astro/config'
import { contentConfig } from './content.config'
import { deployConfig } from './deploy.config'

export const baseConfig = {
    ...deployConfig,
    ...contentConfig,
    devToolbar: {
        enabled: false
    },
    env: {
        validateSecrets: false
    },
    fonts: [
        {
            cssVariable: '--font-sans',
            fallbacks: ['sans-serif'],
            name: 'Geist',
            provider: fontProviders.fontsource()
        }
    ],
    prefetch: true,
    session: false,
    site: 'https://antzhu.com/',
    trailingSlash: 'ignore'
} satisfies Omit<AstroUserConfig, 'integrations' | 'vite'>
