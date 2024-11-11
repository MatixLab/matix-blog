import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import * as React from 'react'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
}

export function CopyButton({
  value,
  className,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
        className,
      )}
      data-copy={value}
      onClick={() => {
        console.log(1)
        // window.navigator.clipboard.writeText(value)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied
        ? (
            <Check className="h-3 w-3" />
          )
        : (
            <Copy className="h-3 w-3" />
          )}
    </Button>
  )
}
