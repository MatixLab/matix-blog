export function extractSegmentURL(path: string) {
    if (!path) {
        return ''
    }
    if (path === '/') {
        return null
    }
    return path.split('/')[1]
}

const REGEX = /\/$/u

export function trimTrailingSlash(value: string) {
    return value.replace(REGEX, '')
}

const pad2 = (n: number) => String(n).padStart(2, '0')

export function formatSimpleDate(date: Date) {
    return `${pad2(date.getMonth() + 1)}/${pad2(date.getDate())}`
}

export function formatDateWithYear(date: Date) {
    return `${date.getFullYear()}, ${pad2(date.getMonth() + 1)}/${pad2(date.getDate())}`
}
