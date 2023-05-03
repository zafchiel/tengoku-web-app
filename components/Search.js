import { FaSearch } from "react-icons/fa"

export default function Search() {
  return (
    <div className="relative flex justify-center items-center gap-2">
      <button className="absolute right-0 flex items-center justify-center rounded-full w-8 h-8 bg-transparent pointer-events-none outline-none border-none ease-linear duration-200 ">
        <FaSearch />
      </button>
      <input
        type="text"
        className="outline-none w-9 h-9 ease-in-out duration-500 bg-transparent pr-7 cursor-pointer focus:w-40 focus:rounded-none focus:border-b border-white "
      />
    </div>
  )
}
