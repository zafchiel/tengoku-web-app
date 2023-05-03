import Layout from "@/components/Layout"
import ListItem from "./components/ListItem"

export default function SearchResultsPage({ data, pagination }) {
  return (
    <Layout>
      <main className="w-full mx-auto pt-24 px-10 gap-2 grid grid-cols-1 md:grid-cols-2">
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
  const params = new URLSearchParams({
    q: searchTerm,
    limit: "10",
    order_by: "popularity",
    min_score: "4",
    rating: ["pg", "pg13", "r17", "r"],
  })
  const res = await fetch(`https://api.jikan.moe/v4/anime?${params}`)
  const { data, pagination } = await res.json()
  return {
    props: {
      data,
      pagination,
    },
  }
}
