import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import Carousel from "@/components/Carousel"

const regex = /\/embed\/([a-zA-Z0-9_-]+)\?/

export default function HomePage({ popularAnime }) {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0)
  const match = popularAnime[selectedHeaderIndex].trailer.embed_url.match(regex)
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
            className="absolute w-full h-screen z-0 "
            src={`${popularAnime[selectedHeaderIndex].trailer.embed_url}&mute=1&playsinline=1&controls=0&loop=1&playlist=${match[1]}`}
          />
          <section className="h-full w-1/4 flex flex-col justify-center items-center p-5 z-20 text-white">
            <h1 className="text-6xl">
              {popularAnime[selectedHeaderIndex].title}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section className="h-full w-3/4 flex items-end pb-14 z-20">
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
