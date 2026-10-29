import type { AstroUserConfig } from 'astro'
import ChildProcess from 'node:child_process'
import { promisify } from 'node:util'
import tailwindcss from '@tailwindcss/vite'


const execAsync = promisify(ChildProcess.exec)
const generateGitData = async () => (await execAsync('git rev-parse HEAD')).stdout
const gitRevision = JSON.stringify(await generateGitData())


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
        {
            config() {
                return {
                    define: {
                        PUBLIC_GIT_REVISION_INFO: gitRevision
                    }
                }
            },
            name: 'vite-plugin-git-revision-info'
        },
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
