"use client";

import Link from "next/link";
import { Home, PlaySquare, Video, User, Tv, Radio, Film, Clapperboard, Headphones  } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const itemClass = (path: string) =>
    `flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-xl cursor-pointer transition
    ${pathname === path ? "bg-[#1a1a1a] text-white" : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"}`;

  return (
    <div className="fixed top-0 left-0 h-full w-[80px] bg-[#0B0B0F] border-r border-white/10 pt-20">

      <div className="flex flex-col items-center gap-3">

        {/* HOME */}
        <Link href="/">
          <div className={itemClass("/")}>
            <Home size={18} />
            <span className="text-[9px]">Home</span>
          </div>
        </Link>

        {/* SHORTS */}
        <Link href="/shorts">
          <div className={itemClass("/shorts")}>
            <PlaySquare size={18} />
            <span className="text-[9px]">Shorts</span>
          </div>
        </Link>

        {/* STREAMING */}
        <Link href="/live">
          <div className={itemClass("/live")}>
            <Radio size={18} />
            <span className="text-[9px]">Live</span>
          </div>
        </Link>

        {/* MOVIES */}
        <Link href="/movies">
          <div className={itemClass("/movies")}>
            <Film size={18} />
            <span className="text-[9px]">Movies</span>
          </div>
        </Link>

        {/* VLOGS */}
        <Link href="/vlogs">
          <div className={itemClass("/vlogs")}>
            <Clapperboard size={18} />
            <span className="text-[9px]">Vlogs</span>
          </div>
        </Link>
        
        {/* MUSIC */}
<Link href="/music">
  <div className={itemClass("/music")}>
    <Headphones size={18} />
    <span className="text-[9px]">Music</span>
  </div>
</Link>

        {/* SUBSCRIPTIONS */}
        <Link href="/subscription">
          <div className={itemClass("/subscription")}>
            <Video size={18} />
            <span className="text-[9px]">Subs</span>
          </div>
        </Link>

        {/* CHANNELS */}
        <Link href="/platforms">
          <div className={itemClass("/platforms")}>
            <Tv size={18} />
            <span className="text-[9px]">Channels</span>
          </div>
        </Link>

        {/* YOU */}
        <Link href="/profile">
          <div className={itemClass("/profile")}>
            <User size={18} />
            <span className="text-[9px]">You</span>
          </div>
        </Link>

      </div>
    </div>
  );
}