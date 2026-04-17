"use client";

import LayoutWrapper from "@/components/LayoutWrapper";

const platforms = [
  { name: "Netflix", logo: "/logos/netflix.png", category: "Movies & Series" },
  { name: "Hulu", logo: "/logos/hulu.jpg", category: "TV & Originals" },
  { name: "Disney+", logo: "/logos/disney.png", category: "Family & Marvel" },
  { name: "Amazon Prime", logo: "/logos/Amazon Prime.png", category: "Movies & Shopping" },
  { name: "HBO Max", logo: "/logos/HBO Max.jpg", category: "Premium Content" },
  { name: "Apple TV+", logo: "/logos/Apple TV+.jpg", category: "Original Shows" },
  { name: "Peacock", logo: "/logos/peacock.png", category: "NBC Content" },
  { name: "Paramount+", logo: "/logos/paramount.png", category: "CBS & Movies" },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white px-4 md:px-6 pb-20 pt-20">
<LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Streaming Platforms
          </h1>
          <p className="text-gray-400 text-lg">
            Discover popular OTT platforms available in the United States.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">

          {platforms.map((platform, i) => (
            <div
              key={i}
              className="group bg-[#111] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center transition duration-300 hover:border-white/20 hover:bg-[#181818] hover:scale-105"
            >
              {/* LOGO */}
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-12 md:h-14 object-contain mb-4 opacity-80 group-hover:opacity-100 transition"
              />

              {/* NAME */}
              <p className="text-sm font-semibold">
                {platform.name}
              </p>

              {/* CATEGORY */}
              <p className="text-xs text-gray-500 mt-1">
                {platform.category}
              </p>
            </div>
          ))}

        </div>

      </div>
      </LayoutWrapper>
    </div>
  );
}