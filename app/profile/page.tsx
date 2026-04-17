"use client";

import LayoutWrapper from "@/components/LayoutWrapper";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white px-6 ">
<LayoutWrapper>
     <div className="max-w-6xl mx-auto space-y-12">

        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gray-600 rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-400">john@email.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 mt-10">Your Videos</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#141414] h-32 rounded-md" />
            ))}
          </div>
        </div>

      </div>
</LayoutWrapper>
   
    </div>
  );
}