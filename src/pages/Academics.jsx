import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaBook, FaFlask, FaChild } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Academics() {
  return (
    <div className="font-montserrat relative">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355056_1280.jpg"
          alt="School"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Our <span className="text-teal-400">Academics</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            Excellence in education across all levels, nurturing young minds to achieve their potential.
          </p>
        </motion.div>
      </section>

      {/* Academics Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16">

          {/* Academics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Kindergarten / Pre-Primary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-pink-100 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <FaChild className="text-pink-500 w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Kindergarten (Pre-Primary)</h2>
              <p className="text-gray-700">
                Early learning through joyful activities, foundational literacy, numeracy,
                motor-skill development, and interactive play-based education.
              </p>
            </motion.div>

            {/* Primary Classes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-yellow-100 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <FaBook className="text-yellow-500 w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Primary (Classes 1–5)</h2>
              <p className="text-gray-700">
                Focus on fundamentals such as language, mathematics, arts, and creative subjects,
                encouraging curiosity and exploration.
              </p>
            </motion.div>

            {/* Middle Classes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-teal-100 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <FaFlask className="text-teal-600 w-16 h-16 mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Middle (Classes 6–8)</h2>
              <p className="text-gray-700">
                Advanced curriculum with emphasis on science, mathematics, and analytical skills,
                preparing students for higher studies and critical thinking.
              </p>
            </motion.div>

          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/admissions"
              className="inline-block bg-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 transition transform hover:scale-105"
            >
              Apply for Admissions
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Decorative Circles */}
      <div className="absolute -top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

    </div>
  );
}
