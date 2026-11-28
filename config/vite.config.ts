import type { AstroUserConfig } from 'astro'
import tailwindcss from '@tailwindcss/vite'

export const viteConfig = {
    build: {
        assetsInlineLimit: 0
    },
    optimizeDeps: {
        exclude: ['marked', '@astrojs/cloudflare/entrypoints/server'],
        force: process.argv.includes('dev'),
        include: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'react-dom/client',
            '@base-ui/react'
        ]
    },
    plugins: [
        tailwindcss()
    ],
    resolve: {
        dedupe: ['react', 'react-dom']
    },
    server: {
        allowedHosts: true
    },
    ssr: {
        external: ['node:fs', 'node:path']
    }
} satisfies AstroUserConfig['vite']
