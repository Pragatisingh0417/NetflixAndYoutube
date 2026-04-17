"use client";

import LayoutWrapper from "@/components/LayoutWrapper";

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white px-4 md:px-6 pb-20 pt-20">
<LayoutWrapper>
     <div className="max-w-6xl mx-auto space-y-12">

          <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
          Choose Your Plan
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {["Basic", "Pro", "Premium"].map((plan, i) => (
            <div
              key={i}
              className="bg-[#141414] p-6 rounded-xl border border-white/10 text-center"
            >
              <h2 className="text-xl font-semibold">{plan}</h2>
              <p className="text-3xl font-bold mt-4">${(i + 1) * 199}/mo</p>

              <button className="mt-6 bg-red-600 px-4 py-2 rounded-md">
                Subscribe
              </button>
            </div>
          ))}

        </div>

      </div>
</LayoutWrapper>
   
    </div>
  );
}