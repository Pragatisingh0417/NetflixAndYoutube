"use client";

import PlatformCard from "./PlatformCard";

const platforms = [
  { name: "Netflix", logo: "/logos/netflix.png" },
  { name: "Hulu", logo: "/logos/Hulu.jpg" },
  { name: "Disney+", logo: "/logos/disney.png" },
  { name: "Amazon Prime", logo: "/logos/Amazon Prime.png" },
  { name: "HBO Max", logo: "/logos/HBO Max.jpg" },
  { name: "Apple TV+", logo: "/logos/Apple TV+.jpg" },
  { name: "Peacock", logo: "/logos/Peacock.png" },
  { name: "Paramount+", logo: "/logos/paramount.png" },
];

export default function PlatformRow() {
  return (
    <div className="max-w-7xl mx-auto mb-12 mt-20">

            <h2 className="text-2xl font-semibold mb-4 px-6">
        Popular Streaming Platforms
      </h2>

      <div className="flex gap-4 px-6 overflow-x-auto scrollbar-hide">
        {platforms.map((platform, i) => (
          <PlatformCard key={i} {...platform} />
        ))}
      </div>

    </div>
  );
}