import { siteConfig } from '@config/site'
import type { CollectionEntry } from 'astro:content'

export type PostListPagination = {
    currentPage: number
    totalPages: number
    prevUrl: string
    nextUrl: string
}

export type PaginatedPosts = {
    posts: CollectionEntry<'post'>[]
    pagination: PostListPagination
}

export function paginatePosts(
    posts: CollectionEntry<'post'>[],
    currentPage: number,
    basePath: string
): PaginatedPosts {
    const { pageSize } = siteConfig.pagination
    const totalPages = Math.ceil(posts.length / pageSize)
    const start = (currentPage - 1) * pageSize

    return {
        pagination: {
            currentPage,
            nextUrl: `${basePath}/page/${currentPage + 1}/`,
            prevUrl:
                currentPage === 2 ? `${basePath}/` : `${basePath}/page/${currentPage - 1}/`,
            totalPages
        },
        posts: posts.slice(start, start + pageSize)
    }
}

export function getPostPaginationPaths(
    posts: CollectionEntry<'post'>[],
    basePath: string,
    routeParams: Record<string, string>
) {
    const totalPages = Math.ceil(posts.length / siteConfig.pagination.pageSize)

    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => {
        const currentPage = index + 2

        return {
            params: { ...routeParams, page: String(currentPage) },
            props: paginatePosts(posts, currentPage, basePath)
        }
    })
}
