import type { APIContext } from 'astro'
import { siteConfig } from '@/config/site'
import { getPosts } from '@/lib/fetchers'
import rss from '@astrojs/rss'

export async function GET(context: APIContext) {
  try {
    const items = await getPosts()

    // Return RSS feed
    return rss({
      title: siteConfig.title,
      description: siteConfig.description,
      site: context.site ?? siteConfig.url,
      items: items.map(item => ({
        title: item.data.title,
        description: item.data.description,
        pubDate: item.data.date,
        categories: item.data.category,
        author: siteConfig.author,
        link: `/${item.collection}/${item.id}/`,
      })),
    })
  }
  catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
