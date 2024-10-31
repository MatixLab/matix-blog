export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export type MenuItem = NavItem & {
  image?: string
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
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export interface NavMenuConfig {
  pagesNav: SidebarNavItem[]
  examplesNav: SidebarNavItem[]
  links: MenuItem[]
}

export interface SubscriptionPlan {
  name: string
  description: string
  stripePriceId: string
}
export interface InfoList {
  icon: string
  title: string
  description: string
}

export interface InfoLdg {
  title: string
  image: string
  description: string
  list: InfoList[]
}
