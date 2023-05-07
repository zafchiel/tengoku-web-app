import { useState } from "react"
import Progressbar from "./Progressbar"
import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Keyboard } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

export default function Carousel({ popularAnime, handleSlideChange }) {
  const [progressBarWidth, setProgressBarWidth] = useState(1)

  const handleChangeSlideIndex = (index) => {
    handleSlideChange(index)
  }

  const onAutoplayTimeLeft = (s, time, progress) => {
    setProgressBarWidth(100 - progress * 100)
  }

  return (
    <>
      <Progressbar barWidth={progressBarWidth} />
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "3rem",
        }}
        navigation={true}
        height={600}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={15}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
        modules={[Autoplay, Navigation, Keyboard]}
        onSlideChange={(e) => handleChangeSlideIndex(e.realIndex)}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          1280: {
            centeredSlides: false,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {popularAnime.map((obj, index) => (
          <SwiperSlide key={index}>
            <Link href={`/details/${obj.mal_id}`}>
              <div className="w-full h-full rounded-md relative overflow-hidden shadow-md">
                <Image
                  width={300}
                  height={400}
                  src={obj.images.jpg.large_image_url}
                  alt={obj.title}
                  className="rounded-lg aspect-[3/4] "
                />
                <div className="bg-black/50 absolute  bottom-0 left-0 p-3 w-full rounded-b-lg">
                  <h1 className="text-xl text-white z-10 font-medium">
                    {obj.title.replaceAll('"', "")}
                  </h1>
                  <div className="flex gap-2 text-gray-300">
                    {obj.genres.map((e, index) => (
                      <p key={index}>{e.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
