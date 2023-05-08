import Image from "next/image"
import Link from "next/link"

export default function ListItem({ data }) {
  return (
    <div className="flex flex-col overflow-hidden min-h-[200px] relative aspect-[2/3]">
      <Link href={`/details/${data?.mal_id}`}>
        <Image
          width={500}
          height={600}
          className="w-full hover:scale-110 duration-300 ease-in-out"
          src={
            data?.images.jpg.image_url !==
            "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
              ? data?.images.jpg.image_url
              : "/no_image.png"
          }
          alt={data?.title}
        />
        <div className="bg-[#2a2c31] h-2/5 md:h-1/5 p-2 text-white z-20 absolute bottom-0 left-0 w-full">
          <h3>{data?.title}</h3>
          <p>{data?.type}</p>
        </div>
        <div className="absolute pointer-events-none bg-gradient-to-t from-[#2a2c31] to-transparent w-full h-full bottom-2 left-0 z-10"></div>
      </Link>
    </div>
  )
}
