import { getCollection } from 'astro:content'

export async function getCategories() {
    const posts = await getCollection('post')
    const categories = [...new Set(posts.flatMap((post) => post.data.category))]
    return categories
}

export async function getPosts() {
    let posts = await getCollection('post')
    posts = posts.toSorted(
        (a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf()
    )
    return posts
}

export async function getShorts() {
    let shorts = await getCollection('short')
    shorts = shorts.toSorted(
        (a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf()
    )
    return shorts
}

export async function getShortCategories() {
    const shorts = await getCollection('short')
    return [...new Set(shorts.flatMap((short) => short.data.category))]
}

export async function getShortsByYear(year: string) {
    let shorts = await getCollection('short')
    shorts = shorts
        .toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .filter((ele) => ele.id.substring(0, 4) === year)
    return shorts
}

export async function getPostsByCategory(category: string) {
    let posts = await getCollection('post')
    posts = posts
        .filter((post) => post.data.category.includes(category))
        .toSorted(
            (a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf()
        )

    return posts
}
