"use client";

import MusicCard from "./MusicCard";

const music = [
  {
    title: "Chill Vibes",
    image: "/images/movie-1.jpg",
    artist: "Various Artists",
  },
  {
    title: "Workout Mix",
    image: "/images/movie-2.jpg",
    artist: "DJ Energy",
  },
  {
    title: "LoFi Beats",
    image: "/images/movie-3.webp",
    artist: "LoFi Studio",
  },
  {
    title: "Top Hits",
    image: "/images/movie-4.webp",
    artist: "Global Charts",
  },
];

export default function MusicRow() {
  return (
    <div className="max-w-7xl mx-auto mb-12">

      <h2 className="text-2xl font-semibold mb-4 px-6">
        🎵 Music
      </h2>

      <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide">
        {music.map((item, i) => (
          <MusicCard key={i} {...item} />
        ))}
      </div>

    </div>
  );
}