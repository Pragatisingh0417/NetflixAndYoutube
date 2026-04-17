"use client";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-4">

      <div className="w-full max-w-md bg-[#141414] p-8 rounded-xl border border-white/10">

        <h1 className="text-3xl font-semibold mb-6 text-center">
          Create Account
        </h1>

        <div className="space-y-4">

          <input placeholder="Full Name" className="input" />
          <input placeholder="Email" className="input" />
          <input placeholder="Password" type="password" className="input" />

          <button className="w-full bg-red-600 py-2 rounded-md hover:bg-red-500">
            Sign Up
          </button>

        </div>

      </div>

    </div>
  );
}