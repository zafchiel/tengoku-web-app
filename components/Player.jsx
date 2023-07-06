import { useEffect } from "react"
import slugify from "@/utils/slugify"

export default function Player({ animeId, animeSlug }) {
  const searchSlug = slugify(animeSlug) + "-episode-" + animeId
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(`/api/anime`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug: searchSlug }),
        })
        const data = await res.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAnime()
  }, [])

  return <div>Player</div>
}
