import type { APIContext } from 'astro'
import { siteConfig } from '@/config/site'
import { getPosts, getShorts } from '@/lib/fetchers'
import rss from '@astrojs/rss'

export async function GET(context: APIContext) {
  try {
    const postsData = (await getPosts()).map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        categories: post.data.category.join(', '),
        author: siteConfig.author,
        link: `/${post.collection}/${post.id}/`,
      }
    })
    const shortData = (await getShorts()).map((short) => {
      return {
        title: short.data.title,
        description: short.data.description,
        pubDate: short.data.pubDate,
        author: siteConfig.author,
        link: `/${short.collection}/${short.id}/`,
      }
    })
    // Return RSS feed
    return rss({
      title: siteConfig.title,
      description: siteConfig.description,
      site: context.site ?? siteConfig.url,
      items: [...postsData, ...shortData],
    })
  }
  catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
