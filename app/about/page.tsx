"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white  px-4 md:px-6 lg:px-8 py-20 pt-30 ">

      <div className="max-w-6xl mx-auto space-y-20">

        {/* HERO / INTRO */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Black Box Live Streaming Network
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            A next-generation OTT and real-time communication (RTC) platform designed to deliver
            high-quality live broadcasting, on-demand video streaming, music streaming, and
            personal content creation.
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="bg-[#111111] border border-white/10 rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            About the Platform
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            The Black Box Live Streaming Network combines the strengths of modern streaming
            platforms to provide a seamless, interactive, and scalable digital entertainment
            ecosystem for users worldwide. It is built to support a wide range of media formats
            while ensuring performance, accessibility, and user engagement.
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="bg-[#111111] border border-white/10 rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Streaming Platform Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
            The platform supports a wide range of content including live broadcasting,
            popular movies, videos, music, and personal creator content.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-400">
            <div className="bg-[#181818] p-4 rounded-lg border border-white/5">
              🔴 Live broadcasting with real-time interaction
            </div>

            <div className="bg-[#181818] p-4 rounded-lg border border-white/5">
              🎬 On-demand movies and video streaming
            </div>

            <div className="bg-[#181818] p-4 rounded-lg border border-white/5">
              🎵 Music streaming and curated playlists
            </div>

            <div className="bg-[#181818] p-4 rounded-lg border border-white/5">
              📹 Personal content creation and creator channels
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Types of Streaming
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* LIVE */}
            <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-6 md:p-8 rounded-xl border border-white/10 hover:border-red-500/30 transition">

              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                🔴 Live Streaming
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Real-time broadcasting that allows users to stream events, interact with audiences,
                and engage through live chat and instant communication features. This enables
                dynamic engagement and immediate content delivery.
              </p>
            </div>

            {/* ON DEMAND */}
            <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-6 md:p-8 rounded-xl border border-white/10 hover:border-white/20 transition">

              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                🎬 On-Demand Streaming
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Access a vast library of movies, videos, and music anytime, allowing users to
                watch or listen at their convenience without time restrictions. This ensures
                flexibility and a personalized entertainment experience.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}