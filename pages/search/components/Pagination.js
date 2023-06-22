import Link from "next/link"

export default function Pagination({ pagination, searchTerm }) {
  const {
    current_page,
    last_visible_page,
    items: { total, per_page },
  } = pagination

  const pages = new Array(last_visible_page).fill(0).map((_, i) => i + 1)

  if (pages.length === 1) return null

  return (
    <div className="flex w-full items-center justify-center p-2">
      {current_page > 1 && (
        <Link
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all  duration-300 hover:bg-neutral-700 "
          href={{
            pathname: "/search",
            query: {
              searchTerm,
              page: current_page - 1,
            },
          }}
        >
          Prev
        </Link>
      )}

      {pages.map((p) => (
        <Link
          className={`
            ${
              current_page === p && "bg-red-700"
            } relative  block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-700`}
          key={p}
          href={{
            pathname: "/search",
            query: {
              searchTerm,
              page: p,
            },
          }}
        >
          {p}
        </Link>
      ))}

      {pagination.has_next_page && (
        <Link
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-white transition-all  duration-300 hover:bg-neutral-700 "
          href={{
            pathname: "/search",
            query: {
              searchTerm,
              page: current_page + 1,
            },
          }}
        >
          Next
        </Link>
      )}
    </div>
  )
}
