import type { UseType } from '@schemas/content.schema'
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

export async function getPostsByCategory(category: string) {
    let posts = await getCollection('post')
    posts = posts
        .filter((post) => post.data.category.includes(category))
        .toSorted(
            (a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf()
        )

    return posts
}

export async function getUses(type?: UseType) {
    let uses = await getCollection('uses')
    if (type) {
        uses = uses.filter((u) => u.data.type === type)
    }
    return uses
}
