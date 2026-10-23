import ChildProcess from 'node:child_process'
import { promisify } from 'node:util'
import cloudflare from '@astrojs/cloudflare'
import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import { rehypePlugins, shikiConfig } from './config/plugins'
import { schema } from './env.schema'

const execAsync = promisify(ChildProcess.exec)
const generateGitData = async () => (await execAsync('git rev-parse HEAD')).stdout
const res = JSON.stringify(await generateGitData())

/**
 * https://astro.build/config
 */
export default defineConfig({
    adapter: cloudflare({
        imageService: 'compile',
        prerenderEnvironment: 'node'
    }),
    env: {
        schema,
        validateSecrets: false
    },
    experimental: {
        contentIntellisense: true
    },
    image: {
        remotePatterns: [
            {
                protocol: 'https'
            }
        ]
    },
    integrations: [
        db(),
        mdx(),
        sitemap(),
        react(),
        icon({
            include: {
                lucide: [
                    'asterisk',
                    'arrow-up-left',
                    'arrow-up-right',
                    'align-left',
                    'hash',
                    'rss'
                ],
                'simple-icons': ['github', 'x', 'bluesky', 'notion', 'gmail']
            }
        }),
        partytown({
            config: {
                forward: ['dataLayer.push']
            }
        }),
        playformCompress({
            Action: {
                // https://github.com/PlayForm/Compress/issues/376
                Passed: async () => true
            },
            HTML: true,
            Image: true,
            JavaScript: true,
            SVG: true
        })
    ],
    markdown: {
        rehypePlugins,
        shikiConfig
    },
    output: 'server',
    prefetch: true,
    session: false,
    site: 'https://antzhu.com/',
    trailingSlash: 'ignore',
    vite: {
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
                            PUBLIC_GIT_REVISION_INFO: res
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
    }
})
