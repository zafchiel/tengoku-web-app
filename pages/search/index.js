import Layout from "@/components/Layout"
import ListItem from "./components/ListItem"
import { useEffect, useState } from "react"

export default function SearchResultsPage({ data, pagination }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data !== undefined) {
      setLoading(false)
    }
  }, [data])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <main className="w-full p-1 md:p-4 px-10 gap-2 auto-rows-fr grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.length === 0 ? (
          <h1>Not Found</h1>
        ) : (
          data.map((element, index) => <ListItem key={index} data={element} />)
        )}
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ query: { searchTerm } }) {
  let data
  const params = new URLSearchParams({
    q: searchTerm,
    letters: searchTerm,
    limit: "25",
    order_by: "popularity",
    rating: ["pg", "pg13", "r17", "r"],
  })
  const res = await fetch(`https://api.jikan.moe/v4/anime?${params}`)
  data = await res.json()

  // If there is no results
  if (data.data.length === 0) {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?letter=${searchTerm}`
    )
    data = await res.json()
  }
  return {
    props: {
      data: data.data,
      pagination: data.pagination,
    },
  }
}
