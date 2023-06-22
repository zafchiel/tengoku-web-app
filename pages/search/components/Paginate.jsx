import Link from "next/link"
import { usePagination, DOTS } from "@/hooks/usePagination"

export default function Paginate({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  searchTerm,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <div className="flex w-full items-center justify-center p-2">
      {currentPage > 1 && (
        <Link
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all  duration-300 hover:bg-neutral-700 "
          href={{
            pathname: "/search",
            query: {
              searchTerm,
              page: currentPage - 1,
            },
          }}
        >
          Prev
        </Link>
      )}
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <div key={index}>&#8230;</div>
        }

        return (
          <Link
            className={`
            ${
              currentPage === pageNumber && "bg-neutral-700"
            } relative  block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-700`}
            key={index}
            href={{
              pathname: "/search",
              query: {
                searchTerm,
                page: pageNumber,
              },
            }}
          >
            {pageNumber}
          </Link>
        )
      })}
      {lastPage !== currentPage && (
        <Link
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-white  transition-all duration-300 hover:bg-neutral-700"
          href={{
            pathname: "/search",
            query: {
              searchTerm,
              page: currentPage + 1,
            },
          }}
        >
          Next
        </Link>
      )}
    </div>
  )
}
