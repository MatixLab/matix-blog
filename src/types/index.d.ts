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

export interface ResourceItem {
  title: string
  icon?: ''
  url?: string
  desc?: string
  cover?: string
}

export interface UsingItem {
  title: string
  icon?: ''
  url?: string
  desc?: string
}

export interface CreditItem {
  title: string
  icon?: ''
  url?: string
  desc?: string
}

export interface ProjectItem {
  title: string
  url: string
  icon?: ''
  desc?: string
  tags?: string[]
}

export interface Resource {
  name: string
  routeName: string
}
