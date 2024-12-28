import { type ClassValue, clsx } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSimpleDate(date: Date) {
  return dayjs(date).format('MM/DD')
}
export function formatDateWithYear(date: Date) {
  return dayjs(date).format('YYYY, MM/DD')
}

export function extractSegmentURL(path: string) {
  if (!path)
    return ''
  if (path === '/')
    return null
  return path.split('/')[1]
}
