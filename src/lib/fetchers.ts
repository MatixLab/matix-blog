import { getCollection } from 'astro:content'

export async function getCategories() {
  const posts = await getCollection('post')
  const categories = [
    ...new Set(posts.map(post => post.data.category).flat()),
  ]
  return categories
}

export async function getPosts() {
  const posts = (await getCollection('post')).sort(
    (a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf(),
  )
  return posts
}

export async function getShorts() {
  const posts = (await getCollection('short')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
  return posts
}

export async function getShortsByYear(year: string) {
  const posts = (await getCollection('short'))
    .sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    )
    .filter((ele) => {
      return ele.id.substring(0, 4) === year.toString()
    })
  return posts
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection('post'))
    .filter(post => post.data.category.includes(category))
    .sort((a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf())

  return posts
}
