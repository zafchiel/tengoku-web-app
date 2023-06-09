import Layout from "@/components/Layout"
import Player from "@/components/Player"
import slugify from "@/utils/slugify"
import { useEffect } from "react"

export default function DetailsPage({ data }) {
  return (
    <Layout>
      <main className="flex h-72 w-full items-center justify-center">
        <h1 className="text-6xl text-white">{data.title}</h1>
        <div>
          <Player animeId={data.mal_id} animeSlug={data.title} />
        </div>
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
