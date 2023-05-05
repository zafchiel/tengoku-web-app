import Image from "next/image"
import Link from "next/link"

export default function ListItem({ data }) {
  return (
    <div className="flex flex-col w-full relative h-full aspect-[2/3]">
      <Link href={`/details/${data.mal_id}`}>
        <Image
          width={200}
          height={300}
          className="w-full h-full z-0"
          src={data.images.jpg.image_url}
          alt={data.title}
        />
        <div className="bg-[#222527] p-2 text-white z-20">
          <h3>{data.title}</h3>
        </div>
        <div className="absolute bg-gradient-to-t from-[#222527]/70 to-transparent w-full h-full bottom-0 left-0 z-10"></div>
      </Link>
    </div>
  )
}
