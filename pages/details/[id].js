import Layout from "@/components/Layout"

export default function DetailsPage({ data }) {
  return (
    <Layout>
      <main className=" w-full h-full">
        <h1 className="text-white">{data.title}</h1>
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
