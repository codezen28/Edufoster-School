import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="font-montserrat relative">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2017/11/29/11/03/kids-2985782_1280.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            Get in touch with Edufoster School. We are here to assist you.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
          >
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:items-start gap-2 hover:shadow-2xl transition transform hover:scale-105">
              <MapPinIcon className="w-6 h-6 text-teal-500" />
              <p>Edufoster School, Main Road, City</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:items-start gap-2 hover:shadow-2xl transition transform hover:scale-105">
              <PhoneIcon className="w-6 h-6 text-teal-500" />
              <p>+91 98765 43210</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:items-start gap-2 hover:shadow-2xl transition transform hover:scale-105">
              <EnvelopeIcon className="w-6 h-6 text-teal-500" />
              <p>info@edufoster.edu.in</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Send Us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full md:col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none h-40"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Optional Decorative Circles */}
      <div className="absolute -top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

    </div>
  );
}
