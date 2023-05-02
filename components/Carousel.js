import Image from "next/image"
import { useEffect, useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"

export default function Carousel({ popularAnime, handleSlideChange }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const handleChangeSlideIndex = (index) => {
    handleSlideChange(index)
  }

  return (
    <>
      (
      <Swiper
        slidesPerView={3}
        loop
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        onSlideChange={(e) => handleChangeSlideIndex(e.realIndex)}
      >
        {popularAnime.map((obj, index) => (
          <>
            <SwiperSlide key={index}>
              <div className="relative w-64 h-96 overflow-hidden shadow-2xl">
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
                  <h1 className="text-xl text-white z-10 ">{obj.title}</h1>
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
      )
    </>
  )
}
