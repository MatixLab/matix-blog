import type { Resource, ResourceItem } from '@/types'

export const tools: ResourceItem[] = []
export const design: ResourceItem[] = []
export const reading: ResourceItem[] = []
export const sites: ResourceItem[] = []
export const space: ResourceItem[] = [
  {
    title: '14" MacBook Pro',
    desc: 'Space Gray, Intel, 16GB RAM, 256GB SSD',
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
    items: tools,
  },
  {
    name: 'Design',
    routeName: 'design',
    items: design,
  },
  {
    name: 'Reading',
    routeName: 'reading',
    items: reading,
  },
  {
    name: 'Sites',
    routeName: 'sites',
    items: sites,
  },
  {
    name: 'Space',
    routeName: 'space',
    items: space,
  },
]
