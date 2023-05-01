import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { register } from "swiper/element/bundle"

register()

export default function Carousel({ popularAnime, handleSlideChange }) {
  const swiperElRef = useRef()
  const [loading, setLoading] = useState(true)
  let arr = []

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    // listen for Swiper events using addEventListener
    if (!loading) {
      swiperElRef.current.addEventListener("slidechange", (e) => {
        swiperElRef.activeIndex
      })
    }
  }, [loading])

  return (
    <>
      {!loading && (
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          loop="true"
          autoplay="true"
          autplay-delay="3000"
        >
          {popularAnime.map((obj, index) => (
            <>
              {arr.push(obj)}
              <swiper-slide key={index}>
                <div className="relative w-64 h-96 overflow-hidden">
                  <Image
                    src={obj.images.jpg.large_image_url}
                    fill
                    alt="image"
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                  <div className="bg-black/50 absolute  bottom-0 left-0 p-3 w-full rounded-b-lg">
                    <h1 className="text-xl text-white z-10 ">
                      {obj.titles[0].title}
                    </h1>
                    <div className="flex gap-2 text-gray-300">
                      {obj.genres.map((e, index) => (
                        <p key={index}>{e.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </>
          ))}
        </swiper-container>
      )}
    </>
  )
}
