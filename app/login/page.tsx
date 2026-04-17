"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-4">

      <div className="w-full max-w-md bg-[#141414] p-8 rounded-xl border border-white/10">

        <h1 className="text-3xl font-semibold mb-6 text-center">
          Welcome Back
        </h1>

        <div className="space-y-4">

          <input
            placeholder="Email"
            className="w-full bg-[#1a1a1a] px-4 py-2 rounded-md outline-none"
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full bg-[#1a1a1a] px-4 py-2 rounded-md outline-none"
          />

          <button className="w-full bg-red-600 py-2 rounded-md hover:bg-red-500">
            Login
          </button>

        </div>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account? <span className="text-white cursor-pointer">Sign up</span>
        </p>

      </div>

    </div>
  );
}