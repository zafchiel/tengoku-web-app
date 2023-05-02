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
  console.log(randomVideoStartSecond)
  return (
    <>
      <Layout isTrasparent={true}>
        <main className="h-screen w-full flex items-center">
          <div className="z-10 fixed top-0 left-0 bg-black/30 w-full h-screen">
            {/* <Image
              src={popularAnime[selectedHeaderIndex].images.jpg.large_image_url}
              fill
              alt="image"
              className="object-cover w-full h-full"
            /> */}
          </div>
          <iframe
            frameborder="0"
            className="absolute w-full h-screen -z-10 "
            src={`
              ${popularAnime[selectedHeaderIndex].trailer.embed_url}&showinfo=0&mute=1&start=${randomVideoStartSecond}&playsinline=1&controls=0&loop=1&playlist=${regexMatch[1]}&cc_load_policy=0&iv_load_policy=3&modestbranding=1`}
          />
          <section className="h-full w-2/5 flex flex-col justify-center items-center p-5 z-20 text-white">
            <h1 className="text-6xl">
              {popularAnime[selectedHeaderIndex].title.replaceAll('"', "")}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section className="h-full w-3/5 flex items-end pb-14 z-20">
            <Carousel
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
