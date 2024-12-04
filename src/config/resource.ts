import type { Resource, ResourceItem } from '@/types'

export enum ResourceType {
  APP_TOOLS = 0,
  PORTFOLIO = 1,
  SUBSCRIBE = 2,
  DESIGN = 3,
  SITES = 4,
  USES = 5,
}

export const use: ResourceItem[] = [
  {
    title: '13" MacBook Pro',
    desc: 'Space Gray, Intel, 16GB RAM, 256GB SSD',
  },
  {
    title: '6.1" Apple iPhone 14',
    desc: 'Starlight Color, 5G, 128GB RAM',
    url: 'https://www.apple.com.cn/shop/buy-iphone/iphone-14/',
    source: 'Official',
  },
  {
    title: 'Apple Watch S9',
    desc: 'GPS, Cellular Network',
    url: 'https://item.jd.com/100066896768.html',
    source: 'JD',
  },
  {
    title: '27" Dell U2720QM',
    desc: '4k, HDR400, Type-C 90W',
  },
]

export const resources: Resource[] = [
  {
    name: 'Apps & Tools',
    routeName: 'tools',
  },
  {
    name: 'Uses',
    routeName: 'uses',
  },
  {
    name: 'Subscribe',
    routeName: 'subscribe',
  },
  {
    name: 'Portfolios',
    routeName: 'portfolios',
  },
  {
    name: 'Design',
    routeName: 'design',
  },
  {
    name: 'Sites',
    routeName: 'sites',
  },
]
