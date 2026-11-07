import type { SiteConfig } from '~types/index'

export const siteConfig: SiteConfig = {
    author: 'Anthony Zhu',
    title: "Anthony Zhu's Blog",
    description: 'A Full Stack Developer.',
    url: 'https://www.antzhu.com',
    repoUrl: 'https://github.com/MatixLab/matix-blog',
    slogan: 'Becoming is better than being.',
    ogImage: 'https://www.antzhu.com/og.jpg',
    links: {
        blueSky: 'https://bsky.app/profile/anthonyzhu.bsky.social',
        email: 'hi@antzhu.com',
        github: 'https://github.com/MagicalZhu',
        notion: 'https://huakucha.notion.site/1538b781a49980dfa194f936fb7f2422',
        twitter: 'https://twitter.com/huakucha10'
    },
    // pagination
    pagination: {
        pageSize: 10
    },
    home: {
        displayNumber: 5
    },
    color: {
        // default theme mode
        mode: 'light' // light | dark | auto
    }
}
