import { useState } from "react"
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
        height={600}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        loop
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay]}
        onSlideChange={(e) => handleChangeSlideIndex(e.realIndex)}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {popularAnime.map((obj, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full rounded-lg">
              <img
                src={obj.images.jpg.large_image_url}
                alt={obj.title}
                className="rounded-lg w-full h-full"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
