import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  className?: string
  suffix?: string
}

export function PaginationBar({
  currentPage,
  totalPages,
  baseUrl,
  suffix,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const getPageUrl = (page: number) => {
    const url = [baseUrl]
    if (suffix)
      url.push(suffix)
    if (page !== 1)
      url.push(String(page))
    return url.join('')
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? getPageUrl(currentPage - 1) : undefined}
            isActive={currentPage !== 1}
            className={cn(
              (currentPage === 1) && 'hover:bg-transparent cursor-default text-ds-gray-800 hover:text-ds-gray-800',
            )}
          />
        </PaginationItem>

        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href={getPageUrl(page)}
              isActive={page === currentPage}
              className={cn(
                (page === currentPage) && 'pointer-events-none',
              )}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        { totalPages > siteConfig.pagination.pageBtnNum && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href={
              currentPage < totalPages ? getPageUrl(currentPage + 1) : undefined
            }
            isActive={currentPage < totalPages}
            className={cn(
              (currentPage === totalPages) && 'hover:bg-transparent cursor-default text-ds-gray-800 hover:text-ds-gray-800',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
