import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-white p-6 font-montserrat overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-gray-900 to-teal-700 animate-gradient-background -z-10"></div>

      {/* Top Section: Logo / Address / Quick Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-start relative z-10">
        {/* Logo + Address */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Edu FOSTER School</h2>
          <p className="text-sm flex items-center justify-center md:justify-start gap-1">
            <MapPinIcon className="w-4 h-4 inline" />
            Near Gandhi Chauraha, Khajuraho, M.P, India
          </p>
          <a
            href="https://maps.app.goo.gl/g3avii68TTq1s3218"
            className="text-sm underline hover:text-teal-400 mt-1 inline-block transition-all duration-300 hover:drop-shadow-lg"
          >
            View on map
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm">
            {["Home", "About", "Academics", "Admissions", "Gallery", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="hover:text-teal-400 transition-all duration-300 hover:drop-shadow-lg"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3 text-sm">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="hover:text-teal-400 transition-all duration-300 hover:drop-shadow-lg"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="hover:text-teal-400 transition-all duration-300 hover:drop-shadow-lg"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.hr
        className="border-gray-700 my-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Bottom Section: Copyright + Credit */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm relative z-10">
        {/* Centered copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Edufoster School. All rights reserved.
        </p>

        {/* Bottom-right credit */}
        <motion.p
          className="flex items-center gap-1 mt-2 md:mt-0 justify-center md:justify-end hover:drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Created by <span className="font-semibold">Vaibhav Gupta</span> | 
          <PhoneIcon className="w-4 h-4 inline" />
          <a href="tel:9993093350" className="underline hover:text-teal-400 transition-all duration-300">
            9993093350
          </a>
        </motion.p>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        .animate-gradient-background {
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
}
