import type { ImageMetadata } from 'astro'

export interface NavItem {
  icon?: string
  class?: string
  title: string
  href: string
  disabled?: boolean
}

export type MenuItem = NavItem & {
  image?: ImageMetadata
  // menu desc
  description?: string
  // is new feature
  launched?: boolean
  external?: boolean
  forceReload?: boolean
}

export type MainNavItem = NavItem

export interface SidebarNavItem {
  title: string
  disabled?: boolean
  external?: boolean
  items: MenuItem[]
}

export interface SiteConfig {
  author: string
  name: string
  title: string
  description: string
  url: string
  repoUrl: string
  ogImage: string
  links: {
    twitter: string
    github: string
    blueSky: string
  }
  pagination: {
    pageSize: number
    itemMaxNum: number
  }
  home: {
    displayNumber: number
  }
}

export interface ResourceItem {
  title: string
  icon?: ''
  url?: string
  desc?: string
  cover?: string
  source?: 'Official' | 'JD'
}

export interface Resource {
  name: string
  routeName: string
}

/**
 * Nav Menu Config Definition
 */
export interface NavMenuConfig {
  links: MenuItem[]
  collective: SidebarNavItem[]
}
