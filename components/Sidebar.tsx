"use client";

import Link from "next/link";
import { Home, PlaySquare, Video, User, Tv  } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const itemClass = (path: string) =>
    `flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-xl cursor-pointer transition
   ${pathname === path ? "bg-[#1a1a1a] text-white" : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"}`;

  return (
<div className="fixed top-0 left-0 h-full w-[80px] bg-[#0B0B0F] border-r border-white/10 pt-20">

  <div className="flex flex-col items-center gap-6">
        {/* HOME */}
        <Link href="/">
          <div className={itemClass("/")}>
            <Home size={18} strokeWidth={2.2} />
            <span className="text-[8px] leading-none tracking-tight">
              Home
            </span>
          </div>
        </Link>

        {/* SHORTS */}
        <Link href="/shorts">
          <div className={itemClass("/shorts")}>
            <PlaySquare size={18} strokeWidth={2.2} />
            <span className="text-[10px] leading-none tracking-tight">
              Shorts
            </span>
          </div>
        </Link>

        {/* SUBSCRIPTIONS */}
        <Link href="/subscription">
          <div className={itemClass("/subscription")}>
            <Video size={18} strokeWidth={2.2} />
            <span className="text-[10px] leading-none tracking-tight">
              Subs
            </span>
          </div>
        </Link>

        {/* CHANNELS */}
<Link href="/platforms">
  <div className={itemClass("/platforms")}>
    <Tv size={18} strokeWidth={2.2} />
    <span className="text-[10px] leading-none tracking-tight">
      Channels
    </span>
  </div>
</Link>

        {/* YOU */}
        <Link href="/profile">
          <div className={itemClass("/profile")}>
            <User size={18} strokeWidth={2.2} />
            <span className="text-[10px] leading-none tracking-tight">
              You
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
}