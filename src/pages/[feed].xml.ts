import type { APIContext } from 'astro'
import { siteConfig } from '@/config/site'
import { getPosts, getShorts } from '@/lib/fetchers'
import rss, { type RSSFeedItem } from '@astrojs/rss'

const feedTypes: string[] = [
  'rss',
  'post',
  'short',
]

export function getStaticPaths() {
  return feedTypes.map((feed) => {
    return { params: { feed } }
  })
}

export async function GET(context: APIContext) {
  try {
    const feed = context.params.feed
    const feedItems: RSSFeedItem[] = []

    const postsData = (await getPosts()).map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: siteConfig.author,
      link: `/${post.collection}/${post.id}/`,
    }))

    const shortData = (await getShorts()).map(short => ({
      title: short.data.title,
      description: short.data.description,
      pubDate: short.data.pubDate,
      author: siteConfig.author,
      link: `/${short.collection}/${short.id}/`,
    }))
    if (feed === 'rss') {
      feedItems.push(...postsData, ...shortData)
    }
    if (feed === 'post') {
      feedItems.push(...postsData)
    }
    if (feed === 'short') {
      feedItems.push(...shortData)
    }
    return rss({
      title: siteConfig.title,
      description: siteConfig.description,
      site: context.site ?? siteConfig.url,
      items: feedItems,
    })
  }
  catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
