import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next/router"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm("")
    router.push(`/search?searchTerm=${searchTerm}`)
  }
  return (
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
  )
}
