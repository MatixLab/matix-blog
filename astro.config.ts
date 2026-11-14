import { baseConfig } from './config/base.config'
import { integrations } from './config/integration.config'
import { viteConfig } from './config/vite.config'
import { defineConfig } from 'astro/config'

export default defineConfig({
    ...baseConfig,
    integrations,
    vite: viteConfig
})
