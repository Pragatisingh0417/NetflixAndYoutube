"use client";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-3xl font-semibold">Upload Video</h1>

        <input placeholder="Video Title" className="input" />
        <textarea placeholder="Description" className="input h-28" />

        <input type="file" className="text-sm" />

        <button className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-500">
          Upload
        </button>

      </div>

    </div>
  );
}