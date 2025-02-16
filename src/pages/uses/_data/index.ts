import type { ResourceItem } from '@/types'

const Device: ResourceItem[] = [
  { title: 'MacBook Pro (Intel)' },
  { title: 'Apple iPhone 14', url: 'https://www.apple.com.cn/shop/buy-iphone/iphone-14/' },
  { title: 'Apple Watch S9', url: 'https://item.jd.com/100066896768.html' },
  { title: 'Dell U2720QM' },
]

const Apps: ResourceItem[] = [
  { title: 'Chrome', desc: 'browsing' },
  { title: 'Follow', desc: 'rss management' },
  { title: 'ClashX', desc: 'proxy' },
  { title: 'DBeaver', desc: 'database management', url: 'https://dbeaver.io/' },
  { title: 'Notion', desc: 'plan management', url: 'https://www.notion.so/' },
  { title: 'VSCode', desc: 'coding', url: 'https://code.visualstudio.com/' },
  { title: 'Obsidian', desc: 'knowledge management', url: 'https://obsidian.md/' },
  { title: 'MonitorControl', desc: 'control my display', url: 'https://monitorcontrol.app/' },
  { title: 'Ollama', desc: 'llm management', url: 'https://ollama.com/' },
]

export const uses = {
  Device,
  Apps,
}
