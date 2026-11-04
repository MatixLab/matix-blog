import { siteConfig } from '@config/site'
import { getPosts, getShorts } from '@lib/fetchers'
import type { APIContext, APIRoute } from 'astro'
import type { Item } from 'feed'
import { Feed } from 'feed'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const parser = new MarkdownIt({
    breaks: true,
    html: true,
    linkify: true
})

const feedTypes: string[] = ['rss', 'post', 'short', 'atom']

export function getStaticPaths() {
    return feedTypes.map((feed) => ({ params: { feed } }))
}

const BASE_URL = siteConfig.url
const AUTHOR = {
    email: siteConfig.links.email,
    link: BASE_URL,
    name: siteConfig.author
}

export const GET: APIRoute = async (context: APIContext) => {
    const feedType = context.params.feed
    const postFeedItems: Item[] = []
    const shortFeedItems: Item[] = []

    const posts = await getPosts()
    const shorts = await getShorts()

    posts.forEach((post) => {
        postFeedItems.push({
            author: [AUTHOR],
            content: sanitizeHtml(parser.render(post.body || ''), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }).replace('href="/', `href="${context.site?.href}`),
            date: post.data.updatedDate,
            description: post.data.description,
            id: `${BASE_URL}/${post.collection}/${post.id}/`,
            link: `${BASE_URL}/${post.collection}/${post.id}/`,
            title: post.data.title
        })
    })

    shorts.forEach((short) => {
        shortFeedItems.push({
            author: [AUTHOR],
            content: sanitizeHtml(parser.render(short.body || ''), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }).replace('href="/', `href="${context.site?.href}`),
            date: short.data.updatedDate,
            description: short.data.description,
            id: `${BASE_URL}/${short.collection}/${short.id}/`,
            link: `${BASE_URL}/${short.collection}/${short.id}/`,
            title: short.data.title
        })
    })

    const feed = new Feed({
        title: siteConfig.title,
        id: `${BASE_URL}/`,
        link: `${BASE_URL}/`,
        description: siteConfig.description,
        // optional, used only in RSS 2.0.
        // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        language: 'zh-CN',
        favicon: `${BASE_URL}/favicon.svg`,
        copyright: 'CC BY-NC-SA 4.0 2021 © Anthony Zhu',
        feedLinks: {
            atom: `${BASE_URL}/atom.xml`,
            rss: `${BASE_URL}/rss.xml`
        },
        author: AUTHOR
    })

    if (feedType === 'rss' || feedType === 'atom') {
        postFeedItems.concat(shortFeedItems).forEach((item: Item) => {
            feed.addItem(item)
        })
    }
    if (feedType === 'post') {
        postFeedItems.forEach((item: Item) => {
            feed.addItem(item)
        })
    }
    if (feedType === 'short') {
        shortFeedItems.forEach((item: Item) => {
            feed.addItem(item)
        })
    }

    return new Response(feed.rss2(), {
        headers: { 'Content-Type': 'application/xml' }
    })
}
