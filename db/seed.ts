import { db, ResourceSites } from 'astro:db'

enum ResourceType {
  APP_TOOLS = 0,
  PORTFOLIO = 1,
  SUBSCRIBE = 2,
  DESIGN = 3,
}

let idx = 0

interface portfolioType {
  name: string
  url: string
  description?: string
  ogUrl?: string
  tags: string
  type: ResourceType
  id: number
}

const portfolio: portfolioType[] = [
  {
    name: 'Josh Comeau',
    url: 'https://www.joshwcomeau.com',
    description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
    ogUrl: 'https://www.joshwcomeau.com/opengraph-image.png',
    tags: 'React,CSS',
  },
  {
    name: 'Joshua Wootonn',
    url: 'https://www.joshuawootonn.com',
    description: 'Full-stack engineer creating polished software',
    ogUrl: 'https://portfolio-5j17xv4l4-joshua-wootonns-projects.vercel.app/seo.png',
    tags: 'React,Component',
  },
  {
    name: 'Onur Şuyalçınkaya',
    url: 'https://onur.dev',
    description: 'Software Engineer, DJ, writer, and minimalist, based in Amsterdam, The Netherlands',
    ogUrl: 'https://onur.dev/opengraph-image',
    tags: 'Share',
  },
  {
    name: 'iDoubi',
    url: 'https://idoubi.cv',
    description: 'Full-Stack Engineer, Indie Maker.',
    tags: 'AI',
  },
  {
    name: 'Guangzheng Li',
    url: 'https://guangzhengli.com',
    description: '一个还在重新学习，重塑思想的开发者',
    tags: 'Share,Indie',
  },
  {
    name: 'Bra',
    url: 'https://bra.live',
    description: 'A flying idealist',
    ogUrl: 'https://bra.live/content/images/2019/02/blog-bg---.jpg',
    tags: 'Share,Indie',
  },
  {
    name: 'pipuwong',
    url: 'https://pipuwong.com',
    description: 'Pipu的个人网站: 记录学习、分享、创造，追求未来无限可能',
    tags: 'Share',
  },
].map((ele: any) => {
  ele.id = ++idx
  ele.type = ResourceType.PORTFOLIO
  return ele
})

const subscribe: portfolioType[] = [
  {
    name: '月球背面',
    url: 'https://moonvy.com/blog',
    description: '月维的创造者们对「设计」和「开发」的思考与讨论',
    ogUrl: 'https://moonvy.com/ow-image.png',
    tags: 'Weekly,Design',
    type: ResourceType.SUBSCRIBE,
  },
  {
    name: '独立开发者出海周刊',
    url: 'https://gapis.money',
    description: '「信息差——独立开发者出海周刊」是一个帮助独立开发者缩小信息差的技术周刊。',
    ogUrl: 'https://gapis.money/og.jpg',
    tags: 'Weekly',
    type: ResourceType.SUBSCRIBE,
  },
].map((ele: any) => {
  ele.id = ++idx
  return ele
})

export default async function () {
  await db.delete(ResourceSites)
  await db.insert(ResourceSites).values(portfolio)
  await db.insert(ResourceSites).values(subscribe)
}
