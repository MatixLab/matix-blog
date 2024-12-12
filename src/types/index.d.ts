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

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
} & (
  | {
    href: string
    items?: never
  }
  | {
    href?: string
    items: MenuItem[]
  }
)

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
  portfolio: SidebarNavItem[]
}

/* landing page */
export interface InfoList {
  icon: string
  title: string
  description: string
}

export interface InfoLdg {
  title: string
  image: ImageMetadata
  description: string
  list: InfoList[]
}
