import Image from "next/image"
import Link from "next/link"
import Dot from "@/assets/icons/Dot"

export default function ListItem({ data }) {
  return (
    <div className="relative flex aspect-[2/3] min-h-[200px] flex-col overflow-hidden">
      <Link href={`/details/${data?.mal_id}`}>
        <Image
          width={500}
          height={600}
          className="aspect-[2/3] w-full object-cover duration-300 ease-in-out hover:scale-110"
          src={
            data?.images.webp.image_url !==
            "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
              ? data?.images.webp.image_url
              : "/no_image.webp"
          }
          alt={data?.title}
        />
        <div className="min-h-1/5 absolute bottom-0 left-0 z-20 w-full bg-[#2a2c31] p-2 text-white">
          <h3>{data?.title}</h3>
          <div className="flex text-neutral-400">
            <p>{data?.type}</p>
            <Dot color={"#a3a3a3"} />
            <p>{data?.episodes}EP</p>
            <Dot color={"#a3a3a3"} />
            <p>{data?.score}&#11088;</p>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-2 left-0 z-10 h-full w-full bg-gradient-to-t from-[#2a2c31] to-transparent"></div>
      </Link>
    </div>
  )
}
