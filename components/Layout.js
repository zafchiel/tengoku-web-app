import Header from "./Header"
import Head from "next/head"

export default function Layout({ isTrasparent, title, children }) {
  return (
    <div className="relative">
      <Head>
        <title>{title}</title>
      </Head>
      <Header isTransparent={isTrasparent} />
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: "Tengoku webapp",
}
