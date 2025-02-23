import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { links } from '@/config/menu'
import { siteConfig } from '@/config/site'
import { Icons } from '@/icons'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon, Github, Menu } from 'lucide-react'
import * as React from 'react'
import { Button } from '../ui/button'

interface MobileNavProps {
  segment: string | null
}

export function MobileNav({
  segment,
}: MobileNavProps) {
  const mergedLinks = links?.filter((item, index, self) =>
    index === self.findIndex(t => t.href === item.href && t.title === item.title),
  )

  const [open, setOpen] = React.useState(false)
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" title="Toggle drawer" className="my-auto md:hidden [&_svg]:size-6">
          <Menu strokeWidth={1.5} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-fit">
        <DrawerDescription />
        <div className="overflow-y-auto p-4">
          <div className="flex w-full flex-col text-sm  space-y-2">
            <div className="flex flex-col gap-2 pb-4">
              <DrawerTitle className="text-center">
                <a
                  className="inline-flex items-center gap-2 p-2"
                  title="Home"
                  href="/"
                >
                  <div className="flex flex-row">
                    <span className="font-bold">{siteConfig.author}</span>
                  </div>
                </a>
              </DrawerTitle>
              <div className="flex flex-col gap-1">
                {
                  mergedLinks?.map(item => (
                    <a
                      key={item.title}
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
