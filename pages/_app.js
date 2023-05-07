import { Inter } from "next/font/google"
import { usePageLoading } from "@/hooks/usePageLoading"
import "@/styles/globals.css"
import LoadingPage from "@/components/LoadingPage"

const inter = Inter({
  subsets: ["latin"],
})

export default function App({ Component, pageProps }) {
  const { isPageLoading } = usePageLoading()
  return (
    <div className={inter.className}>
      {isPageLoading ? <LoadingPage /> : <Component {...pageProps} />}
    </div>
  )
}
