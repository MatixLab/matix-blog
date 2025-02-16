import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Check, Filter } from 'lucide-react'

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
          variant="outline"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden w-full"
        >
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-2">
              <Filter className="size-4" />
              Category
            </div>
            <span className="mr-2">
              { decodeURI(category || 'all') }
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pr-0">
        <ScrollArea className="my-4 h-fit">
          <DrawerDescription />
          <DrawerHeader>
            <DrawerTitle>Select the category of inquiry?</DrawerTitle>
            <div className="mt-2">
              <a
                href="/post/"
                title="All"
                onClick={() => {
                  setCurrentCat('')
                  setOpen(false)
                }}
              >
                <div className="rounded-lg text-foreground hover:bg-muted">
                  <div className="flex items-center justify-between p-3 text-sm">
                    <h2>All</h2>
                    {
                      currentCat === ''
                        ? <Check className="size-5 items-end justify-between stroke-black dark:stroke-white" strokeWidth={1.5} />
                        : null
                    }
                  </div>
                </div>
              </a>
              {
                categories.map((cat: string) => {
                  return (
                    <a
                      href={`/post/category/${cat}/`}
                      key={cat}
                      title={cat}
                      onClick={() => {
                        setCurrentCat(cat)
                        setOpen(false)
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
