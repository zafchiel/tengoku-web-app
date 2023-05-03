import Link from "next/link"
import Search from "./Search"

function Header({ isTransparent }) {
  return (
    <header
      className={`${
        isTransparent
          ? "bg-gradient-to-b from-transparent to-transparent backdrop-blur-sm"
          : "bg-blue-600"
      } h-14 md:h-20 w-full fixed top-0 left-0 z-30 flex justify-between items-center p-3 text-white`}
    >
      <div>
        <Link href="/">
          <h1 className="text-4xl font-bold">TENGOKU</h1>
        </Link>
      </div>

      <nav className="text-xl flex gap-3 justify-around items-center font-medium text-white/75 ">
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Search />
      </nav>
    </header>
  )
}

export default Header

Header.defaultProps = {
  isTransparent: false,
}
