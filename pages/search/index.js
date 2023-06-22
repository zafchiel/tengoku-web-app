import Layout from "@/components/Layout"
import ListItem from "./components/ListItem"
import Pagination from "./components/Pagination"
import Paginate from "./components/Paginate"

export default function SearchResultsPage({ data, pagination, searchTerm }) {
  if (!data)
    return (
      <Layout>
        <main className="flex h-60 items-center justify-center">
          Could not find any match :(
        </main>
      </Layout>
    )

  return (
    <Layout>
      <Paginate
        currentPage={pagination.current_page}
        totalCount={pagination.items.total}
        pageSize={pagination.items.per_page}
        searchTerm={searchTerm}
      />
      <main className="grid w-full auto-rows-fr grid-cols-2 gap-2 p-1 md:grid-cols-3 md:p-4 lg:grid-cols-4 xl:grid-cols-5">
        {data.length === 0 ? (
          <h1>Not Found</h1>
        ) : (
          data.map((element, index) => <ListItem key={index} data={element} />)
        )}
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ query: { searchTerm, page = 1 } }) {
  let data
  const params = new URLSearchParams({
    q: searchTerm,
    page,
    letters: searchTerm,
    limit: "10",
    order_by: "popularity",
  })
  const res = await fetch(`https://api.jikan.moe/v4/anime?${params}`)
  data = await res.json()

  // If there is no results
  if (data.data?.length === 0) {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?letter=${searchTerm}`
      )
      data = await res.json()
    } catch (error) {
      console.log(error)
      return null
    }
  }

  if (data.status == 400)
    return {
      props: {},
    }

  return {
    props: {
      data: data.data,
      pagination: data.pagination,
      searchTerm,
    },
  }
}
