import { db, Portfolios } from 'astro:db'

export default async function () {
  await db.insert(Portfolios).values([
    {
      id: 1,
      name: 'Josh W. Comeau',
      url: 'https://www.joshwcomeau.com',
      description: 'Friendly tutorials for developers. Focus on React, CSS, Animation, and more!',
      ogUrl: 'https://www.joshwcomeau.com/opengraph-image.png',
      tags: 'React,CSS,Animation',
    },
    // TODO add to weekly data
    {
      id: 2,
      name: '月球背面',
      url: 'https://moonvy.com/blog/',
      description: '月维的创造者们对「设计」和「开发」的思考与讨论',
      ogUrl: 'https://moonvy.com/ow-image.png',
      tags: 'Weekly,Design',
    },
    {
      id: 3,
      name: 'Joshua Wootonn',
      url: 'https://www.joshuawootonn.com',
      description: 'Full-stack engineer creating polished software',
      ogUrl: 'https://portfolio-5j17xv4l4-joshua-wootonns-projects.vercel.app/seo.png',
      tags: 'React,UI',
    },
    {
      id: 4,
      name: 'Onur Şuyalçınkaya',
      url: 'https://onur.dev/',
      description: 'Software Engineer, DJ, writer, and minimalist, based in Amsterdam, The Netherlands',
      ogUrl: 'https://onur.dev/opengraph-image',
      tags: 'Template',
    },
  ])
}
