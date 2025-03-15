export interface MainNavItem {
  icon?: string
  class?: string
  title: string
  href: string
}

export interface SiteConfig {
  author: string
  title: string
  description: string
  url: string
  repoUrl: string
  slogan: string
  ogImage: string
  links: {
    twitter: string
    github: string
    blueSky: string
    notion: string
    email: string
  }
  pagination: {
    pageSize: number
  }
  home: {
    displayNumber: number
  }
}

interface CommonItem {
  title: string
  icon?: ''
  url?: string
  desc?: string
}

export type UsingItem = CommonItem
export type CreditItem = CommonItem

export interface CollectiveItem {
  name: string
  url: string
  desc?: string
  tags?: string[]
}

export interface ProjectItem {
  title: string
  state: 'InProgress' | 'Fail' | 'Success'
  url: string
  icon?: string
  desc?: string
  tags?: string[]
}
