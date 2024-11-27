import type { MainNavItem, SidebarNavItem } from '@/types'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { siteConfig } from '@/config/site'
import { Icons } from '@/icons'
import { cn } from '@/lib/utils'
import React from 'react'
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

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" title="Toggle drawer" className="md:hidden">
          <Icons.hamburger className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-4/5">
        <div className="overflow-y-auto p-4">
          <div className="flex w-full flex-col text-sm  space-y-2">
            <div className="flex flex-col gap-4">
              <DrawerTitle>
                <span className="font-bold">{siteConfig.name}</span>
              </DrawerTitle>
              <div className="flex flex-col gap-1">
                {
                  mergedMainNavItems?.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'group flex items-center justify-between rounded-lg p-2 text-ds-gray-900',
                        (item.href.startsWith(`/${segment}`) ? 'bg-black text-white' : 'hover:bg-gray-200'),
                      )}
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
                        {
                          activeItems.map(subItem => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              target={subItem?.external ? '_blank' : undefined}
                              className={cn(
                                'group flex items-center justify-between rounded-lg px-4 py-2 text-ds-gray-900',
                                (subItem.href.startsWith(`/${segment}`) ? 'bg-black text-white' : 'hover:bg-gray-200'),
                              )}
                            >
                              <span className="flex items-center gap-2">
                                <span className="font-medium">
                                  {subItem.title}
                                </span>
                              </span>
                            </a>
                          ))
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2 text-sm">
              <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
                Social
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
