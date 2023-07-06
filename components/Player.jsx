import { useEffect, useState } from "react"
import slugify from "@/utils/slugify"

export default function Player({ animeId, animeSlug }) {
  const [sources, setSources] = useState([])

  const searchSlug = slugify(animeSlug) + "-episode-1"
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
        setSources(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAnime()
  }, [])

  return (
    <div>
      {sources?.map((obj) => (
        <div key={obj.url}>{obj.url}</div>
      ))}
    </div>
  )
}
