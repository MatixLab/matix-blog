import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Icons } from '@/icons'
import { Check } from 'lucide-react'

import * as React from 'react'

export function FilterMobile({
  categories,
  category,
}: { categories: string[], category: string }) {
  const [open, setOpen] = React.useState(false)
  const [currentCat, setCurrentCat] = React.useState(category)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Icons.hamburger className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-16rem)] pb-10">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <div className="mt-2">
              <a
                href="/blog"
                onClick={() => {
                  setCurrentCat('')
                }}
              >
                <div className="rounded-lg text-foreground hover:bg-muted">
                  <div className="flex items-center justify-between p-3 text-sm">
                    <h2>All posts</h2>
                    {
                      currentCat === ''
                        ? <Check className="size-5 items-end justify-between" color="#000" strokeWidth={1.5} />
                        : null
                    }
                  </div>
                </div>
              </a>
              {
                categories.map((cat: string) => {
                  return (
                    <a
                      href={`/blog/category/${cat}`}
                      key={cat}
                      onClick={() => {
                        setCurrentCat(cat)
                      }}
                    >
                      <div className="rounded-lg text-foreground hover:bg-muted">
                        <div className="flex items-center justify-between p-3 text-sm ">
                          <h2>{cat}</h2>
                          {
                            cat === currentCat
                              ? <Check className="size-5 items-end justify-between" color="#000" strokeWidth={1.5} />
                              : null
                          }
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </DrawerHeader>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
