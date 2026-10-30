import type { AstroUserConfig } from 'astro'
import { deployConfig } from './deploy.config'
import { contentConfig } from './content.config'
import { fontProviders } from 'astro/config'

export const baseConfig = {
  ...deployConfig,
  ...contentConfig,
    env: {
        validateSecrets: false
    },
    fonts: [{
      cssVariable: "--font-mono",
      fallbacks: ["monospace"],
      name: "IBM Plex Mono",
      provider: fontProviders.fontsource(),
      subsets: ["latin", "latin-ext"],
    },{
      cssVariable: "--font-sans",
      fallbacks: ["sans-serif"],
      name: "IBM Plex Sans",
      provider: fontProviders.fontsource(),
    }],
    prefetch: true,
    session: false,
    site: 'https://antzhu.com/',
    trailingSlash: 'ignore',
} satisfies Omit<AstroUserConfig, 'integrations' | 'vite'>
