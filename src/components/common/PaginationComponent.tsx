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

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  className?: string
  suffix?: string
}

export function PaginationComponent({
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
          />
        </PaginationItem>

        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href={getPageUrl(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        { totalPages > siteConfig.pagination.itemMaxNum && (
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
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
