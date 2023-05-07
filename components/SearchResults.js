import Link from "next/link"
import Image from "next/image"
import React from "react"
import { FaCircle } from "react-icons/fa"

export default function SearchResults({ searchResults, loading }) {
  if (searchResults.length > 0) {
    return (
      <div className="absolute right-0 -bottom-96 bg-gray-500 ">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col">
            {searchResults.map((result, index) => (
              <Link href={`/details/${result.mal_id}`} key={index}>
                <div className="flex gap-2 border-b border-dashed h-24 w-72 p-4 bg-[#33353c]">
                  <Image
                    width={40}
                    height={55}
                    src={result.images.jpg.small_image_url}
                    alt={result.title}
                  />
                  <div className="flex flex-col justify-between text-left h-full w-full">
                    <h3 className="text-base text-white">
                      {result.title_english}
                    </h3>
                    <h3 className="text-sm text-white/70">{result.title}</h3>
                    <div className="flex text-xs items-center gap-2 justify-between w-4/5">
                      <p className="text-white">{result.type}</p>
                      <FaCircle />
                      <p>
                        {result.aired.prop.from.day +
                          "/" +
                          result.aired.prop.from.month +
                          "/" +
                          result.aired.prop.from.year}
                      </p>
                      <FaCircle />
                      <p>{result.episodes}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
  return null
}
