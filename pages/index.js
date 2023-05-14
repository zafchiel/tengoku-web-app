import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/Layout"
import Carousel from "@/components/Carousel"
import YouTube from "react-youtube"

const regex = /\/embed\/([a-zA-Z0-9_-]+)\?/

export default function HomePage({ popularAnime }) {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const regexMatch =
    popularAnime[selectedHeaderIndex].trailer.embed_url.match(regex)

  const randomVideoStartSecond = Math.floor(Math.random() * 40)

  const handleLoadedVideo = () => {
    setVideoLoaded(true)
  }

  return (
    <>
      <Layout isTrasparent={true}>
        <div className="z-10 fixed top-0 left-0 bg-black/40 w-full h-full overflow-hidden"></div>
        <YouTube
          videoId={regexMatch[1]}
          iframeClassName={`absolute w-full h-screen -z-10 ${
            !videoLoaded && "hidden"
          }`}
          onError={() => setVideoLoaded(false)}
          onPlay={handleLoadedVideo}
          opts={{
            playerVars: {
              autoplay: 1,
              controls: 0,
              mute: 1,
              disablekb: 1,
              iv_load_policy: 3,
              modestbranding: 1,
              showinfo: 0,
              start: randomVideoStartSecond,
            },
          }}
        />
        <Image
          src="/bg_placeholder.webp"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="image"
          className="object-cover w-full h-full -z-20"
        />
        <main className="max-h-screen h-screen w-full flex-col xl:flex-row flex items-center overflow-hidden">
          <section className="h-3/5 lg:h-full w-full lg:w-2/5 flex flex-col justify-center items-center p-5 mt-20 z-20 text-white">
            <Link href={`/details/${popularAnime[selectedHeaderIndex].mal_id}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                {popularAnime[selectedHeaderIndex].title.replaceAll('"', "")}
              </h1>
              <p>{popularAnime[selectedHeaderIndex].title_english}</p>
            </Link>
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
