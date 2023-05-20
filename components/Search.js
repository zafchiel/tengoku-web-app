import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next/router"
import SearchResults from "./SearchResults"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const fetchPreview = async (searchTerm) => {
    setLoading(true)
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=3}`
    )
    const { data } = await res.json()
    setSearchResults(data)

    // If there is no results
    if (data.length === 0) {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?letter=${searchTerm}&limit=5`
      )
      const { data } = await res.json()
      setSearchResults(data)
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    if (searchTerm.length === 0) {
      setSearchResults([])
    } else {
      if (!loading) fetchPreview(searchTerm)
    }
  }, [searchTerm])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm("")
    router.push(`/search?searchTerm=${searchTerm}`)
  }
  return (
    <div className="dropdown relative inline-block">
      <div className="relative flex items-center justify-center gap-2">
        <form onSubmit={handleSubmit}>
          <button className="pointer-events-none absolute right-0 flex h-8 w-8 items-center justify-center rounded-full border-none bg-transparent outline-none duration-200 ease-linear ">
            <FaSearch />
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9 w-9 cursor-pointer border-white bg-transparent pr-7 outline-none duration-500 ease-in-out focus:w-40 focus:rounded-none focus:border-b"
          />
        </form>
      </div>
      <SearchResults searchResults={searchResults} loading={loading} />
    </div>
  )
}
