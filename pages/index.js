import Layout from "@/components/Layout"
import Carousel from "@/components/Carousel"

export default function HomePage({ popularAnime }) {
  console.log(popularAnime[0].trailer.embed_url)
  return (
    <>
      <iframe
        className="absolute top-0 left-0 w-full h-screen"
        src={popularAnime[0].trailer.embed_url}
      />
      <Layout isTrasparent={true}>
        <main className="h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items center z-10">
          <section className="h-full w-1/4 flex flex-col justify-center items-center">
            <h1 className="text-6xl">TENGOKU</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section className="h-full w-3/4 flex items-end pb-14">
            <Carousel popularAnime={popularAnime} />
          </section>
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.jikan.moe/v4/top/anime?filter=airing&limit=6"
  )
  const { data } = await res.json()

  return {
    props: {
      popularAnime: data,
    },
  }
}
