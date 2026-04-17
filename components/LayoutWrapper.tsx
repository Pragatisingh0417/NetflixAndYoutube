"use client";

import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="ml-[80px] pt-20 px-6">
        {children}
      </main>

    </div>
  );
}