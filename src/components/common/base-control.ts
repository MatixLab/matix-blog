import { cva } from '@utils/tv'

export const linkVariants = cva({
    base: 'transition-all duration-500 ease-linear disabled:opacity-50',
    defaultVariants: {
        linkType: 'common'
    },
    variants: {
        linkType: {
            common: 'text-muted-foreground hover:text-foreground',
            unset: ''
        }
    }
})
