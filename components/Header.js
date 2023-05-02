import Link from "next/link"

function Header({ isTransparent }) {
  return (
    <header
      className={`${
        isTransparent
          ? "bg-gradient-to-b from-transparent to-transparent backdrop-blur-sm"
          : "bg-blue-600"
      } h-20 w-full fixed top-0 left-0 z-30 flex justify-between items-center p-3 text-white`}
    >
      <div>
        <h1 className="text-4xl">TENGOKU</h1>
      </div>

      <nav className="text-xl flex w-1/5 justify-around">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header

Header.defaultProps = {
  isTransparent: false,
}
