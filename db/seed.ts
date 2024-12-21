import { db, ResourceSites } from 'astro:db'

enum ResourceType {
  APP_TOOLS = 0,
  PORTFOLIO = 1,
  SUBSCRIBE = 2,
  DESIGN = 3,
}

let idx = 0

const portfolio = [
  {
    id: 0,
    name: 'Josh Comeau',
    url: 'https://www.joshwcomeau.com',
    description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
    ogUrl: 'https://www.joshwcomeau.com/opengraph-image.png',
    tags: 'React,CSS,Animation',
    type: ResourceType.PORTFOLIO,
  },
  {
    id: 0,
    name: 'Joshua Wootonn',
    url: 'https://www.joshuawootonn.com',
    description: 'Full-stack engineer creating polished software',
    ogUrl: 'https://portfolio-5j17xv4l4-joshua-wootonns-projects.vercel.app/seo.png',
    tags: 'React,UI',
    type: ResourceType.PORTFOLIO,
  },
  {
    id: 0,
    name: 'Onur Şuyalçınkaya',
    url: 'https://onur.dev/',
    description: 'Software Engineer, DJ, writer, and minimalist, based in Amsterdam, The Netherlands',
    ogUrl: 'https://onur.dev/opengraph-image',
    tags: 'Template',
    type: ResourceType.PORTFOLIO,
  },
].map((ele) => {
  ele.id = ++idx
  return ele
})

const subscribe = [
  {
    id: 0,
    name: '月球背面',
    url: 'https://moonvy.com/blog/',
    description: '月维的创造者们对「设计」和「开发」的思考与讨论',
    ogUrl: 'https://moonvy.com/ow-image.png',
    tags: 'Weekly,Design',
    type: ResourceType.SUBSCRIBE,
  },
  {
    id: 0,
    name: '独立开发者出海周刊',
    url: 'https://gapis.money/',
    description: '「信息差——独立开发者出海周刊」是一个帮助独立开发者缩小信息差的技术周刊。',
    ogUrl: 'https://gapis.money/og.jpg',
    tags: 'Weekly',
    type: ResourceType.SUBSCRIBE,
  },
].map((ele) => {
  ele.id = ++idx
  return ele
})

export default async function () {
  await db.insert(ResourceSites).values(portfolio)
  await db.insert(ResourceSites).values(subscribe)
}
