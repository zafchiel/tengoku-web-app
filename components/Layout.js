import Header from "./Header"

export default function Layout({ isTrasparent, children }) {
  return (
    <>
      <Header isTransparent={isTrasparent} />
      {children}
    </>
  )
}
