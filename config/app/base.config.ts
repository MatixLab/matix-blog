import type { AstroUserConfig } from 'astro'
import { deployConfig } from './deploy.config'
import { contentConfig } from './content.config'
import { fontProviders } from 'astro/config'

export const baseConfig = {
  ...deployConfig,
  ...contentConfig,
    devToolbar: {
      enabled: false
    },
    env: {
        validateSecrets: false
    },
    fonts: [{
      cssVariable: "--font-sans",
      fallbacks: ["sans-serif"],
      name: "geist",
      provider: fontProviders.fontsource(),
    }],
    prefetch: true,
    session: false,
    site: 'https://antzhu.com/',
    trailingSlash: 'ignore',
} satisfies Omit<AstroUserConfig, 'integrations' | 'vite'>
