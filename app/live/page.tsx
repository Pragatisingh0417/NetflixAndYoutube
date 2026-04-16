"use client";

export default function LivePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex">

      {/* LEFT - VIDEO */}
      <div className="flex-1 p-6">

        <div className="w-full h-[60vh] bg-black rounded-lg flex items-center justify-center">
          <p className="text-gray-400">🎥 Live Stream Video</p>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold mt-4">
          Live Concert Night
        </h1>

        <p className="text-gray-400 text-sm">
          Music Live • 12K watching
        </p>

      </div>

      {/* RIGHT - CHAT */}
      <div className="w-[350px] border-l border-white/10 flex flex-col">

        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 font-semibold">
          Live Chat
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
          <p><span className="text-blue-400">User1:</span> This is amazing 🔥</p>
          <p><span className="text-green-400">User2:</span> Love this stream</p>
          <p><span className="text-yellow-400">User3:</span> Wow 🔴</p>
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/10">
          <input
            placeholder="Send a message..."
            className="w-full bg-[#1a1a1a] px-3 py-2 rounded-md outline-none text-sm"
          />
        </div>

      </div>

    </div>
  );
}