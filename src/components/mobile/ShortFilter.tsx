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

export function ShortFilter({
  years,
  currentYear,
}: {
  years: string[]
  currentYear: string
}) {
  const [open, setOpen] = React.useState(false)
  const [currYear, setCurrentYear] = React.useState(currentYear)

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
              Year
            </div>
            <span className="mr-2">
              {currYear || years[0]}
            </span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="pr-0">
        <ScrollArea className="my-4 h-fit">
          <DrawerDescription />
          <DrawerHeader>
            <DrawerTitle>Select the year of inquiry?</DrawerTitle>
            <div className="mt-2">
              {
                years.map((year: string) => {
                  return (
                    <a
                      href={`/short/${year}`}
                      key={year}
                      onClick={() => {
                        setCurrentYear(year)
                        setOpen(false)
                      }}
                    >
                      <div className="rounded-lg text-foreground hover:bg-muted">
                        <div className="flex items-center justify-between p-3 text-sm ">
                          <h2>{year}</h2>
                          {
                            year === currYear
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
