"use client";

import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <h1 className="text-red-600 font-bold text-4xl tracking-wide cursor-pointer">
            StreamX
          </h1>

          {/* Nav Links */}
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <p className="hover:text-white transition cursor-pointer">Home</p>
            <p className="hover:text-white transition cursor-pointer">Explore</p>
            <p className="hover:text-white transition cursor-pointer">Shorts</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="flex items-center bg-[#1a1a1a] px-3 py-1.5 rounded-md gap-2 focus-within:ring-1 focus-within:ring-white/30 transition">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>

          {/* Notification */}
          <Bell className="text-gray-300 hover:text-white cursor-pointer transition" size={18} />

          {/* Profile */}
          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full cursor-pointer" />

        </div>

      </div>

    </div>
  );
}