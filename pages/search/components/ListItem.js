import Image from "next/image"
import Link from "next/link"

export default function ListItem({ data }) {
  return (
    <div className="flex flex-col overflow-hidden min-h-[300px] relative aspect-[2/3]">
      <Link href={`/details/${data?.mal_id}`}>
        <Image
          width={200}
          height={300}
          className="w-full "
          src={data?.images.jpg.image_url}
          alt={data?.title}
        />
        <div className="bg-[#2a2c31] p-2 text-white z-20 absolute bottom-0 left-0 w-full h-1/5">
          <h3>{data?.title}</h3>
        </div>
        <div className="absolute bg-gradient-to-t from-[#2a2c31] to-transparent w-full h-full bottom-[20%] left-0 z-10"></div>
      </Link>
    </div>
  )
}
