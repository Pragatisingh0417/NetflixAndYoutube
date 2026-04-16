"use client";

import { useRef } from "react";
import Card from "./Card";

type RowProps = {
  title: string;
};

const movies = [
  "/images/movie-1.webp",
  "/images/movie-2.webp",
  "/images/movie-3.webp",
  "/images/movie-4.webp",
  "/images/movie-5.webp",
  "/images/movie-6.webp",
  "/images/movie-7.webp",
  "/images/movie-8.webp",
  "/images/movie-9.webp",
  "/images/movie-10.webp",
];

export default function Row({ title }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = 400;
      rowRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-12 relative group">

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4 px-6">
        {title}
      </h2>

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ◀
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ▶
      </button>

      {/* SCROLL ROW */}
      <div
        ref={rowRef}
        className="flex overflow-x-auto overflow-y-hidden gap-6 px-6 scrollbar-hide scroll-smooth"
      >
        {movies.map((img, i) => (
          <Card
            key={i}
            title={`Movie ${i + 1}`}
            image={img}
            duration="2:10:00"
            index={i}
          />
        ))}
      </div>

    </div>
  );
}