import ChildProcess from 'node:child_process'
import { promisify } from 'node:util'
import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import playformCompress from '@playform/compress'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import {
  rehypePlugins,
  shikiConfig,
} from './config/plugins'

import { schema } from './env.schema'

const execAsync = promisify(ChildProcess.exec)

async function generateGitData() {
  return (await execAsync('git rev-parse HEAD')).stdout
}

const res = JSON.stringify(await generateGitData())

/**
 * https://astro.build/config
 */
export default defineConfig({
  site: 'https://antzhu.com/',
  prefetch: true,
  integrations: [
    db(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
    react(),
    icon({
      include: {
        'lucide': [
          'asterisk',
          'arrow-up-left',
          'align-left',
          'hash',
          'rss',
        ],
        'simple-icons': ['github', 'x', 'bluesky', 'notion', 'gmail'],
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    playformCompress({
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
      Action: {
        // https://github.com/PlayForm/Compress/issues/376
        Passed: async () => true,
      },
    }),
  ],
  markdown: {
    shikiConfig,
    rehypePlugins,
  },

  image: {
    remotePatterns: [{
      protocol: 'https',
    }],
  },
  experimental: {
    contentIntellisense: true,
    responsiveImages: true,
    svg: true,
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
    optimizeDeps: {
      include: ['lucide-react'],
    },
    plugins: [{
      name: 'vite-plugin-git-revision-info',
      config() {
        return {
          define: {
            PUBLIC_GIT_REVISION_INFO: res,
          },
        }
      },
    }],
  },

  env: {
    schema,
    validateSecrets: false,
  },
  adapter: netlify({
    cacheOnDemandPages: false,
  }),
})
