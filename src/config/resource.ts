import type { Resource, ResourceItem } from '@/types'

export enum ResourceType {
  APP_TOOLS = 0,
  PORTFOLIO = 1,
  SUBSCRIBE = 2,
  DESIGN = 3,
  SITES = 4,
  USES = 5,
}

export const resources: Resource[] = [
  {
    name: 'Apps & Tools',
    routeName: 'tools',
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
]
