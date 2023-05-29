import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/Layout"
import Carousel from "@/components/Carousel"
import YouTube from "react-youtube"

const regex = /\/embed\/([a-zA-Z0-9_-]+)\?/
const randomVideoStartSecond = Math.floor(Math.random() * 40)

export default function HomePage({ popularAnime }) {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0)
  const [videoIdsArray, setVideoIdsArray] = useState(
    popularAnime[0].trailer.embed_url.match(regex)
  )
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    setVideoIdsArray(
      popularAnime[selectedHeaderIndex].trailer.embed_url.match(regex)
    )
  }, [selectedHeaderIndex, popularAnime])

  const handleLoadedVideo = () => {
    setVideoLoaded(true)
  }

  return (
    <>
      <Layout isTrasparent={true}>
        <div className="fixed left-0 top-0 z-10 h-full w-full overflow-hidden bg-black/40"></div>
        <YouTube
          videoId={videoIdsArray[1]}
          iframeClassName={`absolute w-full h-screen -z-10 ${
            !videoLoaded && "hidden"
          }`}
          onError={() => setVideoLoaded(false)}
          onPlay={handleLoadedVideo}
          onEnd={() => setVideoLoaded(false)}
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
          src={`https://img.youtube.com/vi/${videoIdsArray[1]}/maxresdefault.jpg`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="image"
          className="-z-20 h-full w-full object-cover"
        />
        <main className="flex h-screen max-h-screen w-full flex-col items-center overflow-hidden xl:flex-row">
          <section className="z-20 mt-20 flex h-3/5 w-full flex-col items-center justify-center p-5 text-white lg:h-full lg:w-2/5">
            <Link href={`/details/${popularAnime[selectedHeaderIndex].mal_id}`}>
              <h1 className="mb-3 text-4xl font-bold md:text-6xl">
                {popularAnime[selectedHeaderIndex].title.replaceAll('"', "")}
              </h1>
              <p>{popularAnime[selectedHeaderIndex].title_english}</p>
            </Link>
          </section>

          <section className="z-20 flex h-full w-full items-end p-14 lg:w-3/5">
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
