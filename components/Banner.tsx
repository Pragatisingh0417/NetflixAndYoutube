export default function Banner() {
  return (
    <div className="relative h-[75vh] w-full mt-16">

      {/* Background Image */}
      <img
        src="/images/banner.avif" // 👉 use your local image
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY (Left fade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent" />

      {/* TOP FADE (Netflix style) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0B0F] to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-24 left-10 max-w-xl">

        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Featured Movie Title
        </h1>

        <p className="text-gray-300 mb-6 text-lg">
          A gripping cinematic experience filled with action, drama and powerful storytelling.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">

          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 flex items-center gap-2">
            ▶ Play
          </button>

          <button className="bg-gray-700/80 px-6 py-2 rounded-md hover:bg-gray-600 flex items-center gap-2">
            + My List
          </button>

        </div>
      </div>

    </div>
  );
}