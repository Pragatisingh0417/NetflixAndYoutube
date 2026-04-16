"use client";

import VlogCard from "./VlogCard";

const vlogs = [
  {
    title: "Day in My Life",
    image: "/images/movie-7.jpg",
    creator: "John Vlogs",
    views: "1.2M",
  },
  {
    title: "Goa Travel Vlog",
    image: "/images/movie-8.jpg",
    creator: "Travel Guru",
    views: "850K",
  },
  {
    title: "Startup Journey",
    image: "/images/movie-3.webp",
    creator: "Founder Talks",
    views: "420K",
  },
  {
    title: "Morning Routine",
    image: "/images/movie-4.webp",
    creator: "Lifestyle Hub",
    views: "600K",
  },
   {
    title: "Startup Journey",
    image: "/images/movie-3.webp",
    creator: "Founder Talks",
    views: "420K",
  },
   {
    title: "Day in My Life",
    image: "/images/movie-7.jpg",
    creator: "John Vlogs",
    views: "1.2M",
  },
];

export default function VlogRow() {
  return (
    <div className="max-w-7xl mx-auto mb-12">

      <h2 className="text-2xl font-semibold mb-4 px-6">
        Daily Vlogs
      </h2>

      <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide">
        {vlogs.map((vlog, i) => (
          <VlogCard key={i} {...vlog} />
        ))}
      </div>

    </div>
  );
}