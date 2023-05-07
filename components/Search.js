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
      <div className="relative flex justify-center items-center gap-2">
        <form onSubmit={handleSubmit}>
          <button className="absolute right-0 flex items-center justify-center rounded-full w-8 h-8 bg-transparent pointer-events-none outline-none border-none ease-linear duration-200 ">
            <FaSearch />
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-9 h-9 ease-in-out duration-500 bg-transparent pr-7 cursor-pointer focus:w-40 focus:rounded-none focus:border-b border-white"
          />
        </form>
      </div>
      <SearchResults searchResults={searchResults} loading={loading} />
    </div>
  )
}
