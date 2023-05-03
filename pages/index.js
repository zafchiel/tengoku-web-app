import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import Carousel from "@/components/Carousel"

const regex = /\/embed\/([a-zA-Z0-9_-]+)\?/

export default function HomePage({ popularAnime }) {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0)
  const regexMatch =
    popularAnime[selectedHeaderIndex].trailer.embed_url.match(regex)

  const randomVideoStartSecond = Math.floor(Math.random() * 40)
  return (
    <>
      <Layout isTrasparent={true}>
        <div className="z-10 fixed top-0 left-0 bg-black/30 w-full h-full">
          {/* <Image
              src={popularAnime[selectedHeaderIndex].images.jpg.large_image_url}
              fill
              alt="image"
              className="object-cover w-full h-full"
            /> */}
        </div>
        <main className="max-h-screen h-screen w-full flex-col xl:flex-row flex items-center overflow-hidden">
          <iframe
            className="absolute w-full h-screen -z-10 "
            src={`
              ${popularAnime[selectedHeaderIndex].trailer.embed_url}&showinfo=0&mute=1&start=${randomVideoStartSecond}&playsinline=1&controls=0&loop=1&playlist=${regexMatch[1]}&cc_load_policy=0&iv_load_policy=3&modestbranding=1`}
          />
          <section className="h-3/5 lg:h-full w-full lg:w-2/5 flex flex-col justify-center items-center p-5 mt-20 z-20 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              {popularAnime[selectedHeaderIndex].title.replaceAll('"', "")}
            </h1>
            <p>{popularAnime[selectedHeaderIndex].title_english}</p>
          </section>

          <section className="h-full w-full flex items-end lg:w-3/5 p-14 z-20">
            <Carousel
              className="h-full"
              popularAnime={popularAnime}
              handleSlideChange={(slideIndex) =>
                setSelectedHeaderIndex(slideIndex)
              }
            />
          </section>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.jikan.moe/v4/top/anime?filter=airing&limit=6"
  )
  const { data } = await res.json()

  return {
    props: {
      popularAnime: data,
    },
    revalidate: 60,
  }
}
