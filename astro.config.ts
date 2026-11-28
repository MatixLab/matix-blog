import { defineConfig } from 'astro/config'
import { baseConfig } from './config/base.config'
import { integrations } from './config/integration.config'
import { viteConfig } from './config/vite.config'

export default defineConfig({
    ...baseConfig,
    integrations,
    vite: viteConfig
})
