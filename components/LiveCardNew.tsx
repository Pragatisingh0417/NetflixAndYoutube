"use client";

import Link from "next/link";

type LiveCardProps = {
  title: string;
  image: string;
  channel: string;
  viewers: string;
};

export default function LiveCard({
  title,
  image,
  channel,
  viewers,
}: LiveCardProps) {
  return (
    <Link href="/live" className="block w-72 flex-shrink-0 group">
      
      <div className="relative rounded-lg overflow-hidden cursor-pointer">

        {/* Thumbnail */}
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* LIVE Badge */}
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
          🔴 LIVE
        </span>

        {/* Viewers */}
        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
          👁 {viewers}
        </span>
      </div>

      {/* Info */}
      <div className="mt-2">
        <p className="text-sm font-semibold text-white">
          {title}
        </p>
        <p className="text-xs text-gray-400">
          {channel}
        </p>
      </div>

    </Link>
  );
}