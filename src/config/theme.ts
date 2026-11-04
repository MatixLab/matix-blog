import type { ThemeConfig } from '@/types'

export const themeConfig: {
    mode: 'light' | 'dark' | 'auto'
    light: {
        primary: string
        secondary: string
        background: string
        highlight: string
    }
    dark: {
        primary: string
        secondary: string
        background: string
        highlight: string
    }
} = {
    dark: {
        // primary color
        primary: 'oklch(92% 0.005 298)',
        // secondary color
        secondary: 'oklch(77% 0.005 298)',
        // background color
        background: 'oklch(22% 0.005 298)',
        // highlight color
        highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)' // rgba(255,235,0,0.2)
    },
    light: {
        // primary color
        // used for title, hover, etc
        // oklch color picker: https://oklch.com/
        primary: 'oklch(25% 0.005 298)',
        // secondary color
        // used for post text
        secondary: 'oklch(40% 0.005 298)',
        // background color
        background: 'oklch(96% 0.005 298)',
        // highlight color
        // used for navbar, selected text, etc
        highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)' // rgba(255,235,0,0.5)
    },
    mode: 'light' // light | dark | auto
}
