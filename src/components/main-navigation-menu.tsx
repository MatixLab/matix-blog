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

const links = navMenuConfig.links
const pages = navMenuConfig.pagesNav[0]
const examples = navMenuConfig.examplesNav[0]

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
        href={disabled ? undefined : href}
        {...(forceReload ? { 'data-astro-reload': true } : {})}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-ds-gray-1000',
          'hover:bg-accent  focus:bg-accent focus:text-accent-foreground',
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
        <p className={cn(
          'line-clamp-2 text-sm leading-snug',
          disabled ? 'text-ds-gray-800' : 'text-ds-gray-900 hover:text-ds-gray-1000',
        )}
        >
          {description}
        </p>
      </a>
    </li>
  )
}
ListItem.displayName = 'ListItem'

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-ds-gray-900 hover:text-ds-gray-1000 font-normal">{examples.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {examples.items?.map(example => (
                <ListItem key={example.title} {...example} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-ds-gray-900 hover:text-ds-gray-1000 font-normal">{pages.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {pages.items?.map(page => (
                <ListItem key={page.title} {...page} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {links
          ? (
              <NavigationMenuItem>
                {links.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-ds-gray-900 hover:text-ds-gray-1000 font-normal',
                    )}
                    {...(link.forceReload ? { 'data-astro-reload': true } : {})}
                  >
                    {link.title}
                  </a>
                ))}
              </NavigationMenuItem>
            )
          : null}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
