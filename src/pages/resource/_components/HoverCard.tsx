import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'
import { HashIcon } from 'lucide-react'

export function MarkCard({ url, name, tags, description, children }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex justify-between items-center">
          <a
            href={`${url}?ref=huakucha.top`}
            target="_blank"
            title={name}
            rel="noopener noreferrer"
            className={cn(
              '!underline underline-offset-4 decoration-ds-gray-500 hover:decoration-ds-gray-800 decoration-1',
              'after:content-["_↗"] text-ds-gray-1000 after:text-ds-gray-1000',
            )}
          >
            <span className="text-sm font-medium text-ds-gray-1000">{name}</span>
          </a>
          <div className="flex items-center space-x-2">
            {
              tags?.split(',').map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400"
                >
                  <HashIcon className="size-3 mr-1" />
                  {tag}
                </span>
              ))
            }
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-80">
        <div className="space-y-1">
          <div className="space-y-1">
            {children}
            {
              description && (
                <p className="text-sm">
                  {description}
                </p>
              )
            }
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
