import type { UsingItem } from '@/types'

const Device: UsingItem[] = [
  { title: 'MacBook Pro (Intel)' },
  {
    title: 'Apple iPhone 14',
    url: 'https://www.apple.com.cn/shop/buy-iphone/iphone-14/'
  },
  { title: 'Apple Watch S9', url: 'https://item.jd.com/100066896768.html' },
  { title: 'Dell U2720QM' },
  { title: 'Keychron K3 Pro', url: 'https://item.jd.com/10073839082426.html' },
  { title: 'Logitech G102', url: 'https://item.jd.com/100012720924.html' }
]

const Apps: UsingItem[] = [
  { title: 'Chrome', desc: '浏览器' },
  { title: 'Follow', desc: 'Rss 管理' },
  { title: 'ClashX', desc: '系统代理' },
  {
    title: 'DBeaver',
    desc: '数据库管理',
    url: 'https://dbeaver.io/'
  },
  {
    title: 'Notion',
    desc: 'All-in-one 笔记',
    url: 'https://www.notion.so/'
  },
  {
    title: 'VSCode',
    desc: 'Coding',
    url: 'https://code.visualstudio.com/'
  },
  {
    title: 'Obsidian',
    desc: '知识管理',
    url: 'https://obsidian.md/'
  },
  {
    title: 'MonitorControl',
    desc: 'Mac 显示器控制',
    url: 'https://monitorcontrol.app/'
  },
  { title: 'Ollama', desc: 'LLM 管理', url: 'https://ollama.com/' }
]

export const uses = {
  Device,
  Apps
}
