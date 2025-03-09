import { cn } from '@/lib/utils'
import * as React from 'react'

interface Props {
  className?: string
}

export const MdxComponents = {
  h1: ({ className, ...props }: Props) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl  font-semibold ',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: Props) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 pb-1 text-2xl font-semibold',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: Props) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold ',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: Props) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold ',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: Props) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold ',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: Props) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold ',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: Props) => (
    <p
      className={cn('leading-7 not-first:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: Props) => (
    <ul className={cn('my-6 ml-1 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: Props) => (
    <ol className={cn('my-6 ml-1 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: Props) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: Props) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic *:text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: Props) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: Props) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
}
