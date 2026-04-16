"use client";

type MusicCardProps = {
  title: string;
  image: string;
  artist: string;
};

export default function MusicCard({ title, image, artist }: MusicCardProps) {
  return (
    <div className="w-40 flex-shrink-0 cursor-pointer group">

      <div className="relative rounded-lg overflow-hidden bg-[#141414]">

        <img
          src={image}
          className="w-full h-40 object-cover"
        />

        {/* Play Button */}
        <div className="absolute bottom-3 right-3 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          ▶
        </div>
      </div>

      <p className="text-sm font-medium mt-2">{title}</p>
      <p className="text-xs text-gray-400">{artist}</p>

    </div>
  );
}