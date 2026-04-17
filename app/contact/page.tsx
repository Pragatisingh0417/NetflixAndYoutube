"use client";

import LayoutWrapper from "@/components/LayoutWrapper";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white pt-20 px-4 md:px-6 py-10">
<LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <section className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started with Black Box
          </h1>
          <p className="text-gray-400">
            Choose your plan, subscribe, and experience next-generation streaming.
          </p>
        </section>

        {/* PRICING */}
        <section className="grid md:grid-cols-3 gap-6">

          {/* BASIC */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-400 mb-4">For casual users</p>
            <p className="text-3xl font-bold mb-6">$199/month</p>

            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li>✔ Access to videos & music</li>
              <li>✔ Limited live streaming</li>
              <li>✔ Standard quality</li>
            </ul>

            <button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200">
              Choose Plan
            </button>
          </div>

          {/* PRO */}
          <div className="bg-[#141414] border border-red-500/40 rounded-xl p-6 scale-105">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-400 mb-4">Most Popular</p>
            <p className="text-3xl font-bold mb-6">$499/month</p>

            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li>✔ Full video & movie access</li>
              <li>✔ Unlimited live streaming</li>
              <li>✔ HD quality</li>
              <li>✔ Creator tools</li>
            </ul>

            <button className="w-full bg-red-600 py-2 rounded-md hover:bg-red-500">
              Get Started
            </button>
          </div>

          {/* PREMIUM */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-400 mb-4">For professionals</p>
            <p className="text-3xl font-bold mb-6">$999/month</p>

            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              <li>✔ Everything in Pro</li>
              <li>✔ 4K streaming</li>
              <li>✔ Priority support</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200">
              Choose Plan
            </button>
          </div>

        </section>

        {/* CONTACT + FORM */}
        <section className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <p className="text-gray-400 mb-4">
              Reach out to us for subscriptions, support, or inquiries.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📧 Email: support@blackbox.com</p>
              <p>📞 Phone: +1 XXXXXXX</p>
              <p>🌐 Website: www.blackbox.com</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Send us a message
            </h2>

            <div className="space-y-4">

              <input
                placeholder="Your Name"
                className="w-full bg-[#1a1a1a] px-4 py-2 rounded-md outline-none"
              />

              <input
                placeholder="Your Email"
                className="w-full bg-[#1a1a1a] px-4 py-2 rounded-md outline-none"
              />

              <textarea
                placeholder="Your Message"
                className="w-full bg-[#1a1a1a] px-4 py-2 rounded-md outline-none h-28"
              />

              <button className="w-full bg-red-600 py-2 rounded-md hover:bg-red-500">
                Send Message
              </button>

            </div>
          </div>

        </section>

      </div>
      </LayoutWrapper>
    </div>
  );
}