import { type ClassValue, clsx } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function formatDate(date: Date) {
  return dayjs(date).format('MMMM D YYYY, HH:mm A')
}

export function formatSimpleDate(date: Date) {
  return dayjs(date).format('MM/DD')
}

export function extractSegmentURL(path: string) {
  if (!path)
    return ''
  if (path === '/')
    return null
  return path.split('/')[1]
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, '')
  const wordCount = textOnly.split(/\s+/).length
  return (wordCount / 200 + 1).toFixed()
}
