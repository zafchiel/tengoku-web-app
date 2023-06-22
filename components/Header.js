import Link from "next/link"
import Search from "./Search"

function Header({ isTransparent }) {
  return (
    <header
      className={`${
        isTransparent
          ? "fixed bg-gradient-to-b from-transparent to-transparent backdrop-blur-sm"
          : "block bg-[#222527]"
      } left-0 top-0 z-30  flex h-14 w-full items-center justify-between p-3 text-white md:h-20`}
    >
      <div>
        <Link href="/">
          <h1 className="bg-gradient-to-r from-stone-500 via-neutral-200 to-stone-500 bg-clip-text text-4xl font-bold text-transparent">
            TENGOKU
          </h1>
        </Link>
      </div>

      <nav className="relative flex items-center justify-around gap-3 text-xl font-medium text-white/75">
        {/* <Link href="/about" className="hover:text-white">
          About
        </Link> */}
        <Search />
      </nav>
    </header>
  )
}

export default Header

Header.defaultProps = {
  isTransparent: false,
}
