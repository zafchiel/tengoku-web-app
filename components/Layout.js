import Header from "./Header"
import Head from "next/head"

export default function Layout({ isTrasparent, title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header isTransparent={isTrasparent} />
      {children}
    </>
  )
}

Layout.defaultProps = {
  title: "Tengoku webapp",
}
