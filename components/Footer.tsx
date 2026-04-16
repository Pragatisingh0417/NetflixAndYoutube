import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

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
          <p className="hover:text-white cursor-pointer">Help Center</p>
          <p className="hover:text-white cursor-pointer">Terms of Use</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Contact Uss</p>
          <p className="hover:text-white cursor-pointer">Jobs</p>
          <p className="hover:text-white cursor-pointer">Account</p>
          <p className="hover:text-white cursor-pointer">Media Center</p>
          <p className="hover:text-white cursor-pointer">Legal Notices</p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">

          <p>© 2026 StreamX. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Built with ❤️ using Next.js
          </p>

        </div>

      </div>

    </footer>
  );
}