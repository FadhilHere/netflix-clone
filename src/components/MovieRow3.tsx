"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MovieRowProps {
  title: string;
  movies: { id: number; title: string; image: string }[];
}

export default function MovieRow3({ title, movies }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-2 relative group">
      <h2 className="text-xl font-semibold pl-8 md:pl-16 lg:pl-24">{title}</h2>

      {/* Left Navigation Arrow */}
      <div
        className={`absolute top-0 bottom-0 left-3 z-40 flex items-center justify-center opacity-0 transition hover:opacity-100 cursor-pointer group-hover:opacity-100 ${
          !isMoved && "hidden"
        }`}
      >
        <ChevronLeft
          className="h-9 w-9 text-white"
          onClick={() => handleClick("left")}
        />
      </div>

      {/* Movie Slider */}
      <div className="relative px-8 md:px-16 lg:px-24">
        {/* Container utama harus overflow-hidden */}
        <div className="overflow-hidden">
          {/* Movie Slider */}
          <div
            ref={rowRef}
            className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth pl-0 py-4 whitespace-nowrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="min-w-[180px] md:min-w-[220px] h-[120px] md:h-[140px] cursor-pointer transition duration-200 ease-out md:hover:scale-105"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="rounded-sm object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <div className="absolute top-0 bottom-0 right-3 z-40 flex items-center justify-center opacity-0 transition hover:opacity-100 cursor-pointer group-hover:opacity-100">
        <ChevronRight
          className="h-9 w-9 text-white"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
