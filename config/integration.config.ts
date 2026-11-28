import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import type { AstroIntegration } from 'astro'
import Info from 'unplugin-info/astro'

export const integrations: AstroIntegration[] = [
  Info({
        package: {
          dependencies: true
        }
      }),
    mdx(),
    sitemap(),
    react(),
    partytown({
        config: { forward: ['dataLayer.push'] }
    }),
    playformCompress({
        Action: {
            Passed: async () => true
        },
        HTML: true,
        Image: true,
        JavaScript: true,
        SVG: true
    })
]
