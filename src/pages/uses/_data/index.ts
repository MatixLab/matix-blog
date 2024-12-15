import type { ResourceItem } from '@/types'

const Device: ResourceItem[] = [
  { title: 'MacBook Pro (Intel)' },
  { title: 'Apple iPhone 14', url: 'https://www.apple.com.cn/shop/buy-iphone/iphone-14/' },
  { title: 'Apple Watch S9', url: 'https://item.jd.com/100066896768.html' },
  { title: 'Dell U2720QM' },
]

const Apps: ResourceItem[] = [
  { title: 'Chrome', desc: 'Browsing' },
  { title: 'Follow', desc: 'Rss management' },
  { title: 'ClashX', desc: 'Proxy' },
  { title: 'DBeaver', desc: 'DB management', url: 'https://dbeaver.io/' },
  { title: 'Notion', desc: 'Plan management', url: 'https://www.notion.so/' },
  { title: 'VSCode', desc: 'Coding', url: 'https://code.visualstudio.com/' },
  { title: 'Obsidian', desc: 'Knowledge management', url: 'https://obsidian.md/' },
  { title: 'MonitorControl', desc: 'Control my display', url: 'https://monitorcontrol.app/' },
]

export const uses = {
  Device,
  Apps,
}
