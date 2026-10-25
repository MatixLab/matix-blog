import { defineConfig } from 'astro/config'
import { baseConfig } from '#/config/app/base.config'
import { integrations } from '#/config/app/integration.config'
import { viteConfig } from '#/config/app/vite.config'

export default defineConfig({
    ...baseConfig,
    integrations,
    vite: viteConfig
})
