import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { navMenuConfig } from '@/config/nav-menu'
import { cn } from '@/lib/utils'
import * as React from 'react'

const links = navMenuConfig.links

export default function Command() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <p className="text-sm text-muted-foreground my-auto hover:cursor-pointer" onClick={() => { setOpen(open => !open) }}>
        <kbd className={cn(
          'pointer-events-none inline-flex select-none items-center gap-1 rounded',
          'border bg-muted px-1.5 text-muted-foreground opacity-100',
        )}
        >
          <span className="text-sm">⌘</span>
          K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {links
              ? (
                  links.map((link) => {
                    return (
                      <CommandItem key={link.href} asChild>
                        <Icon name="github" class="size-4" />
                        <a
                          href={link.href}
                          aria-label={link.title}
                          className="block w-full h-full cursor-pointer"
                          onClick={() => { setOpen(open => !open) }}
                        >
                          {link.title}
                        </a>
                      </CommandItem>
                    )
                  })
                )
              : null}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
