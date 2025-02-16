import type { ProjectItem } from '@/types'

const InProgress: ProjectItem[] = [
  {
    title: 'matix-blog',
    url: 'https://github.com/MatixLab/matix-blog',
    desc: 'A simple portfolio template built with Astro',
    tags: ['Astro', 'Template'],
  },
  {
    title: 'awesome-site',
    url: 'https://github.com/MagicalZhu/awesome-site',
    desc: '记录一些日常收藏的网站',
    tags: ['Awesome'],
  },
]

export const projects = {
  InProgress,
}
