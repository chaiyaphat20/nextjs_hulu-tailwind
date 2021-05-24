import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import {forwardRef} from "react";
const  Thumbnail =forwardRef(({ result },ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div ref={ref} className="group cursor-pointer transition duration-200 ease-in transform sm:scale-105 hover:z-50 ">
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div style={{ padding: "0.5rem" }}>
        <p
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {result.overview}
        </p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 ">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date && `${result.release_date} •`}{" "}
          <ThumbUpIcon
            style={{
              height: "1.25rem",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
            }}
            className="h-5 mx-2"
          />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
})

export default Thumbnail;
