import type { MenuItem } from '@/types'
import { Badge } from '@/components/ui/badge'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { navMenuConfig } from '@/config/nav-menu'
import { cn } from '@/lib/utils'
import * as React from 'react'

const {
  links,
  collective,
} = navMenuConfig

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
  forceReload,
}) => {
  const target = external ? '_blank' : undefined

  return (
    <li>
      <a
        target={target}
        title={title}
        href={disabled ? undefined : href}
        {...(forceReload ? { 'data-astro-reload': true } : {})}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-ds-gray-1000',
          'hover:bg-accent focus:bg-accent focus:text-accent-foreground',
          disabled
            ? 'text-muted-foreground hover:bg-transparent hover:text-muted-foreground hover:cursor-not-allowed'
            : '',
        )}
      >
        <div className="flex items-center text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>

          {
            disabled
              ? (
                  <Badge
                    variant="secondary"
                    className="h-5 px-1.5 text-xs font-medium text-ds-gray-800"
                  >
                    SOON
                  </Badge>
                )
              : null
          }

          {
            launched
              ? (
                  <Badge
                    className="h-5 px-1.5 text-xs font-medium bg-ds-green-400 hover:bg-ds-green-500 text-ds-green-700"
                  >
                    NEW
                  </Badge>
                )
              : null
          }
        </div>
        {
          description && (
            <p className={cn(
              'line-clamp-2 text-sm leading-snug',
              disabled ? 'text-ds-gray-800' : 'text-ds-gray-900 hover:text-ds-gray-1000',
            )}
            >
              {description}
            </p>
          )
        }
      </a>
    </li>
  )
}
ListItem.displayName = 'ListItem'

export function MainNavigationMenu({
  segment,
}: {
  segment: string | null
}) {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          {
            links
              ? (
                  <NavigationMenuItem>
                    {links.map(link => (
                      <a
                        key={link.href}
                        href={link.href}
                        title={link.title}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'text-ds-gray-900 hover:text-ds-gray-1000 font-normal',
                          link.href.startsWith(`/${segment}`)
                            ? 'text-black dark:text-white'
                            : 'text-ds-gray-900',
                        )}
                        {...(link.forceReload ? { 'data-astro-reload': true } : {})}
                      >
                        {link.title}
                      </a>
                    ))}
                  </NavigationMenuItem>
                )
              : null
          }

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-ds-gray-900 hover:text-ds-gray-1000 font-normal">
              Collective
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className={`grid w-[250px] gap-2 p-2 md:w-[350px] md:grid-cols-${collective.length}`}>
                {
                  collective.map((p) => {
                    return (
                      <div key={p.title}>
                        <div className="px-2.5 pt-2 pb-1 text-ds-gray-700 text-sm">
                          {p.title}
                        </div>
                        <ul>
                          {p.items?.map(page => (
                            <ListItem key={page.title} {...page} />
                          ))}
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
