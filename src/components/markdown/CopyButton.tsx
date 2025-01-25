import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import * as React from 'react'

interface CopyButtonProps {
  value: string
  src?: string
  className?: string
}

export function CopyButton({
  value,
  className,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 3000)
  }, [hasCopied])

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'relative z-10 h-6 w-6 dark:text-zinc-50 dark:hover:bg-black dark:hover:text-zinc-50',
        'text-black hover:bg-zinc-200 hover:text-black',
        className,
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {
        hasCopied
          ? <Check className="size-3" />
          : <Copy className="size-3" />
      }
    </Button>
  )
}
