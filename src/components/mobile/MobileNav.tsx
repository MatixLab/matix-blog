import type { MainNavItem, SidebarNavItem } from '@/types'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { siteConfig } from '@/config/site'
import { Icons } from '@/icons'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon, Github, Menu } from 'lucide-react'
import * as React from 'react'
import { Button } from '../ui/button'

interface SheetMobileProps {
  mainNavItems: MainNavItem[]
  sidebarNavItems: SidebarNavItem[]
  segment: string | null
}

export function MobileNav({
  mainNavItems,
  sidebarNavItems,
  segment,
}: SheetMobileProps) {
  const mergedMainNavItems = mainNavItems?.filter((item, index, self) =>
    index === self.findIndex(t => t.href === item.href && t.title === item.title),
  )
  const [open, setOpen] = React.useState(false)
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" title="Toggle drawer" className="my-auto md:hidden">
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-fit">
        <DrawerDescription />
        <div className="overflow-y-auto p-4">
          <div className="flex w-full flex-col text-sm  space-y-2">
            <div className="flex flex-col gap-4 pb-4">
              <DrawerTitle>
                <span className="font-bold">{siteConfig.author}</span>
              </DrawerTitle>
              <div className="flex flex-col gap-1">
                {
                  mergedMainNavItems?.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      title={item.title}
                      className={cn(
                        'group flex items-center justify-between rounded-lg p-2 text-ds-gray-1000',
                        (item.href.startsWith(`/${segment}`) && 'bg-black text-white'),
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-medium">
                          {item.title}
                        </span>
                      </span>
                    </a>
                  ))
                }
                {
                  sidebarNavItems.map((item) => {
                    const activeItems = item?.items?.filter((subItem) => {
                      return !subItem.disabled && subItem.href
                    })
                    if (!activeItems || activeItems.length === 0)
                      return null
                    return (
                      <div key={item.title} className="flex flex-col">
                        <span className="font-bold text-ds-gray-1000 p-2">{item.title}</span>
                        <ul>
                          {
                            activeItems.map(subItem => (
                              <li key={subItem.href} className="ml-2 border-l-ds-gray-300 border-l-[1px]">
                                <a
                                  href={subItem.href}
                                  target={subItem?.external ? '_blank' : undefined}
                                  title={subItem.title}
                                  className={cn(
                                    'group flex items-center justify-between rounded-lg px-4 pt-2 text-ds-gray-1000',
                                    (subItem.href.startsWith(`/${segment}`) && 'bg-black text-white'),
                                  )}
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="font-medium">
                                      {subItem.title}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2 text-sm pt-4">
              <div className="flex flex-col gap-1">
                <a
                  key="github"
                  href={siteConfig.links.github}
                  title="Github"
                  className="flex items-center justify-between gap-2 rounded-lg p-2  text-ds-gray-1000"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Github size={16} />
                    {' '}
                    Github
                  </span>
                  <ArrowUpRightIcon size={16} />
                </a>
                <a
                  key="twitter"
                  title="X"
                  href={siteConfig.links.twitter}
                  className="flex items-center justify-between gap-2 rounded-lg p-2  text-ds-gray-1000"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Icons.x className="size-4" />
                    {' '}
                    X (Twitter)
                  </span>
                  <ArrowUpRightIcon size={16} />
                </a>
                <a
                  key="blueSky"
                  title="BlueSky"
                  href={siteConfig.links.blueSky}
                  className="flex items-center justify-between gap-2 rounded-lg p-2  text-ds-gray-1000"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Icons.bluesky className="size-4" />
                    {' '}
                    BlueSky
                  </span>
                  <ArrowUpRightIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
