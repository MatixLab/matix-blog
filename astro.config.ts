import { baseConfig } from '@base/config/app/base.config'
import { integrations } from '@base/config/app/integration.config'
import { viteConfig } from '@base/config/app/vite.config'
import { defineConfig } from 'astro/config'

export default defineConfig({
    ...baseConfig,
    integrations,
    vite: viteConfig
})
