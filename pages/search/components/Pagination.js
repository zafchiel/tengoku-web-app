import Link from "next/link"
import { useRouter } from "next/router"

export default function Pagination({ pagination, searchTerm }) {
  const router = useRouter()

  const {
    current_page,
    last_visible_page,
    items: { total, per_page },
  } = pagination

  const pages = new Array(last_visible_page).fill(0).map((_, i) => i + 1)

  if (pages.length === 1) return null

  return (
    <div className="flex p-2 justify-center items-center w-full">
      {current_page > 1 && (
        <Link
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300  text-white hover:bg-neutral-700 hover:text-white"
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
          className={`${
            router.query.page === p.toString()
              ? "bg-neutral-600 text-white"
              : ""
          } relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300bg-neutral-100 text-white hover:bg-neutral-700 hover:text-white`}
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
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300  text-white hover:bg-neutral-700 hover:text-white"
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
