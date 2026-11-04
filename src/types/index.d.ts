export type MainNavItem = {
    icon?: string
    class?: string
    title: string
    href: string
}

export type SiteConfig = {
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

type CommonItem = {
    title: string
    icon?: ''
    url?: string
    desc?: string
}

export type UsingItem = CommonItem
export type CreditItem = CommonItem

export type CollectiveItem = {
    name: string
    url: string
    desc?: string
    tags?: string[]
}

export type ProjectItem = {
    title: string
    state: 'InProgress' | 'Fail' | 'Success'
    url: string
    icon?: string
    desc?: string
    tags?: string[]
}
