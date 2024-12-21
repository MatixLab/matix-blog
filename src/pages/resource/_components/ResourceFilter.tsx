import type { Resource } from '@/types'
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
import { resources } from '@/config/resource'
import { Check, Filter } from 'lucide-react'
import * as React from 'react'

export function FilterResource({
  resourceName,
}: { resourceName: string }) {
  const [open, setOpen] = React.useState(false)
  const [currentResource, setCurrentResource] = React.useState(resourceName)

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
              Resource
            </div>
            <span className="mr-2">
              {resourceName || resources[0].name}
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pr-0">
        <ScrollArea className="my-4 h-fit">
          <DrawerDescription />
          <DrawerHeader>
            <DrawerTitle>Select the resource of inquiry?</DrawerTitle>
            <div className="mt-2">
              {
                resources.map((res: Resource) => {
                  return (
                    <a
                      href={`/resource/${res.routeName}`}
                      key={res.name}
                      title={res.name}
                      onClick={() => {
                        setCurrentResource(res.name)
                        setOpen(false)
                      }}
                    >
                      <div className="rounded-lg text-foreground hover:bg-muted">
                        <div className="flex items-center justify-between p-3 text-sm ">
                          <h2>{res.name}</h2>
                          {
                            res.name === currentResource
                              ? <Check className="size-5 items-end justify-between stroke-black dark:stroke-white" strokeWidth={1.5} />
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
