import Image from "next/image"

export default function ListItem({ data }) {
  return (
    <div class="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
      <Image
        class="rounded-l-lg"
        height={200}
        width={200}
        src={data.images.jpg.image_url}
        alt={data.title}
      />
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {data.title}
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  )
}
