import cloudflare from '@astrojs/cloudflare'
import { cacheCloudflare } from '@astrojs/cloudflare/cache'
import type { AstroUserConfig } from 'astro'

export const deployConfig = {
    adapter: cloudflare({
        imageService: 'compile',
        prerenderEnvironment: 'node'
    }),
    cache: {
        provider: cacheCloudflare()
    },
    output: 'server'
} satisfies Pick<AstroUserConfig, 'adapter' | 'cache' | 'output'>
