import Layout from "@/components/Layout"

export default function DetailsPage({ data }) {
  return (
    <Layout>
      <main className="flex h-72 w-full items-center justify-center">
        <h1 className="text-6xl text-white">{data.title}</h1>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
  const { data } = await res.json()
  return {
    props: { data },
  }
}
