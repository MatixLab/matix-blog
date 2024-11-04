import type { APIRoute } from 'astro'

function getRobotsTxt(sitemapURL: URL) {
  return `
User-agent: *
Allow: /
Sitemap: ${sitemapURL.href}
`
}

// TODO fix sitemap-index not found
// see https://docs.astro.build/zh-cn/guides/integrations-guide/sitemap
// see issue  https://github.com/withastro/astro/issues/3682
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)
  return new Response(getRobotsTxt(sitemapURL))
}
