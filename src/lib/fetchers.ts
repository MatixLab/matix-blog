import { USE_TYPES } from '@schemas/content.schema'
import type { UseType } from '@schemas/content.schema'
import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import { dependencies } from '~build/package'
import now from '~build/time'
import type { CommonItem } from '~types/index'

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

export function groupPostsByYear(posts: CollectionEntry<'post'>[]) {
    const postsByYear: Record<string, CollectionEntry<'post'>[]> = {}
    posts.forEach((post) => {
        const year = String(post.data.pubDate.getFullYear())
        if (!Object.hasOwn(postsByYear, year)) {
            postsByYear[year] = []
        }
        postsByYear[year].push(post)
    })
    return postsByYear
}

export function getPostYears(postsByYear: Record<string, CollectionEntry<'post'>[]>) {
    return Object.keys(postsByYear).toSorted((a, b) => Number(b) - Number(a))
}

export function getDefaultPostYear(postsByYear: Record<string, CollectionEntry<'post'>[]>) {
    const years = getPostYears(postsByYear)
    const currentYear = String(new Date().getFullYear())
    return Object.hasOwn(postsByYear, currentYear) ? currentYear : (years[0] ?? currentYear)
}

export async function getPostsByCategory(category: string) {
    let posts = await getCollection('post')
    posts = posts
        .filter((post) => post.data.category.includes(category))
        .toSorted((a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf())

    return posts
}

export async function getUses(type?: UseType) {
    let uses = await getCollection('uses')
    if (type) {
        uses = uses.filter((u) => u.data.type === type)
    }
    return uses
}

export function getUseTypes(uses: CollectionEntry<'uses'>[]) {
    return USE_TYPES.filter((type) => uses.some((u) => u.data.type === type))
}

export function getDefaultUseType(uses: CollectionEntry<'uses'>[]) {
    return getUseTypes(uses)[0] ?? USE_TYPES[0]
}

export const getCredits = (): Record<string, CommonItem[]> => {
    const prefixes = ['@cloudflare', '@fontsource', '@playform', '@astro', '@tailwindcss']
    const depends = Object.entries(dependencies).flatMap(([key, value]) =>
        prefixes.every((p) => !key.startsWith(p)) ? [{ title: key, version: value }] : []
    )
    return {
        'Deployed on': [{ title: 'Netlify', url: 'https://www.netlify.com' }],
        Date: [{ title: now.toLocaleDateString() }],
        Packages: depends,
        License: [
            { title: 'MIT', url: 'https://github.com/MatixLab/matix-blog/blob/V7/LICENSE' }
        ],
        Agents: [
            { title: 'llms.txt', url: '/llms.txt' },
            { title: 'index.md', url: '/index.md' }
        ],
        Typeface: [{ title: 'IBM Plex', url: 'https://www.ibm.com/plex/' }],
        'Inspired by': [
            { title: 'Hiran Venugopalan', url: 'https://hiran.in/index.html' },
            { title: 'Fabian Schultz', url: 'https://www.fabianschultz.com' }
        ]
    }
}
