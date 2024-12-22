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
  description?: string
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
    notion: string
  }
  pagination: {
    pageSize: number
    pageBtnNum: number
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
