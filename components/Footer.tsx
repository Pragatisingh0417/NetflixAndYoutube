import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          <FaFacebook className="hover:text-white cursor-pointer transition" />
          <FaInstagram className="hover:text-white cursor-pointer transition" />
          <FaTwitter className="hover:text-white cursor-pointer transition" />
          <FaYoutube className="hover:text-white cursor-pointer transition" />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
                        <Link href="/about"><p className="hover:text-white">About</p></Link>
                                    <Link href="/platforms"><p className="hover:text-white">Platforms</p></Link>

            <Link href="/contact"><p className="hover:text-white">Contact</p></Link>
                        <Link href="/login"><p className="hover:text-white">Login</p></Link>

            <Link href="/signup"><p className="hover:text-white">Signup</p></Link>


          <p className="hover:text-white cursor-pointer">Terms of Use</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">

          <p>© 2026 StreamX. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Built with ❤️ By Gem Web Services
          </p>

        </div>

      </div>

    </footer>
  );
}