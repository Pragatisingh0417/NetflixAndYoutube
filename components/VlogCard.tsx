"use client";

type VlogCardProps = {
  title: string;
  image: string;
  creator: string;
  views: string;
};

export default function VlogCard({
  title,
  image,
  creator,
  views,
}: VlogCardProps) {
  return (
    <div className="w-64 flex-shrink-0 cursor-pointer group">

      {/* Thumbnail */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          className="w-130 h-45 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-1 rounded">
          12:45
        </span>
      </div>

      {/* Info */}
      <div className="mt-2 flex gap-2">

        {/* Avatar */}
        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>

        <div>
          <p className="text-sm font-medium text-white line-clamp-2">
            {title}
          </p>
          <p className="text-xs text-gray-400">
            {creator} • {views} views
          </p>
        </div>

      </div>
    </div>
  );
}