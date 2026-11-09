import { siteConfig } from '@config/site'
import { getPosts } from '@lib/fetchers'
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

const feedTypes: string[] = ['rss', 'post', 'atom']

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

    const posts = await getPosts()

    posts.forEach((post) => {
        postFeedItems.push({
            author: [AUTHOR],
            content: sanitizeHtml(parser.render(post.body ?? ''), {
                allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img']
            }).replace('href="/', `href="${context.site?.href}`),
            date: post.data.updatedDate,
            description: post.data.description,
            id: `${BASE_URL}/${post.collection}/${post.id}/`,
            link: `${BASE_URL}/${post.collection}/${post.id}/`,
            title: post.data.title
        })
    })

    const feed = new Feed({
        author: AUTHOR,
        copyright: 'CC BY-NC-SA 4.0 2021 © Anthony Zhu',
        description: siteConfig.description,
        favicon: `${BASE_URL}/favicon.svg`,
        feedLinks: {
            atom: `${BASE_URL}/atom.xml`,
            rss: `${BASE_URL}/rss.xml`
        },
        id: `${BASE_URL}/`,
        language: 'zh-CN',
        link: `${BASE_URL}/`,
        title: siteConfig.title
    })

    postFeedItems.forEach((item: Item) => {
        feed.addItem(item)
    })

    if (feedType === 'atom') {
        return new Response(feed.atom1(), {
            headers: { 'Content-Type': 'application/xml' }
        })
    }
    return new Response(feed.rss2(), {
        headers: { 'Content-Type': 'application/xml' }
    })
}
