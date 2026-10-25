import dayjs from 'dayjs'

export function formatSimpleDate(date: Date) {
    return dayjs(date).format('MM/DD')
}
export function formatDateWithYear(date: Date) {
    return dayjs(date).format('YYYY, MM/DD')
}

export function extractSegmentURL(path: string) {
    if (!path) {
        return ''
    }
    if (path === '/') {
        return null
    }
    return path.split('/')[1]
}
