import Image from "next/image"
import { useEffect, useState } from "react"
import Progressbar from "./Progressbar"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"

export default function Carousel({ popularAnime, handleSlideChange }) {
  const [progressBarWidth, setProgressBarWidth] = useState(1)

  const handleChangeSlideIndex = (index) => {
    handleSlideChange(index)
  }

  const onAutoplayTimeLeft = (s, time, progress) => {
    setProgressBarWidth(progress)
  }

  return (
    <>
      <Progressbar barWidth={progressBarWidth} />
      <Swiper
        loop
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay]}
        className="mySwiper"
        onSlideChange={(e) => handleChangeSlideIndex(e.realIndex)}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.75": {
            slidesPerView: 3,
          },
        }}
      >
        {popularAnime.map((obj, index) => (
          <>
            <SwiperSlide key={index}>
              <div className="relative w-32 md:w-44 lg:w-64 h-60 md:h-80  lg:h-96 overflow-hidden shadow-2xl">
                <Image
                  src={obj.images.jpg.large_image_url}
                  fill
                  alt="image"
                  className="rounded-lg "
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
                <div className="bg-black/50 absolute  bottom-0 left-0 p-3 w-full rounded-b-lg">
                  <h1 className="text-xl text-white z-10 ">
                    {obj.title.replaceAll('"', "")}
                  </h1>
                  <div className="flex gap-2 text-gray-300">
                    {obj.genres.map((e, index) => (
                      <p key={index}>{e.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  )
}
