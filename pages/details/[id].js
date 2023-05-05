import Layout from "@/components/Layout"

export default function DetailsPage({ data }) {
  return (
    <Layout>
      <h1>{data.title}</h1>
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
