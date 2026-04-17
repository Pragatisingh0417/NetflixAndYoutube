"use client";

import { Search, Bell, Menu, Mic } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-[#0B0B0F] border-b border-white/10 px-4 md:px-6 py-2 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Menu size={22} className="cursor-pointer" />

        <h1 className="text-red-600 font-bold text-xl tracking-wide">
          BlackbOX
        </h1>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex items-center w-full max-w-[600px] mx-auto max-w-xl">

        {/* INPUT */}
        <div className="flex items-center flex-1 bg-[#121212] border border-white/10 rounded-l-full px-4 py-2">
          <input
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
          />
        </div>

        {/* SEARCH BUTTON */}
        <button className="bg-[#222] border border-white/10 border-l-0 px-4 py-2 rounded-r-full hover:bg-[#2a2a2a]">
          <Search size={18} />
        </button>

        {/* MIC */}
        <button className="ml-3 bg-[#181818] p-2 rounded-full hover:bg-[#2a2a2a]">
          <Mic size={18} />
        </button>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        <div className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-[#1a1a1a] px-3 py-1.5 rounded-full transition">
          <span className="text-xl">＋</span>
          <span className="text-sm">Create</span>
        </div>

        <Bell size={20} className="cursor-pointer hover:text-white text-gray-300" />

        <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer" />

      </div>

    </div>
  );
}