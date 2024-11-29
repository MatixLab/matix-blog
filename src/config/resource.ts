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
    title: '6.1" Apple iPhone 14',
    desc: 'Starlight Color, 5G, 128GB RAM',
  },
  {
    title: 'Apple Watch S9',
    desc: 'GPS, Cellular Network',
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
    name: 'Design',
    routeName: 'design',
  },
  {
    name: 'Reading',
    routeName: 'reading',
  },
  {
    name: 'Sites',
    routeName: 'sites',
  },
  {
    name: 'Workspace',
    routeName: 'space',
  },
]
