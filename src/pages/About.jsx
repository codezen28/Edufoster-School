import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaBullseye, FaEye, FaChalkboardTeacher } from "react-icons/fa";

export default function About() {
  return (
    <div className="font-montserrat relative">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355056_1280.jpg"
          alt="School"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        {/* Dark Overlay + Blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            About <br />
            <span className="text-teal-400">Edu FOSTER School</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            Empowering students through excellence in education, values, and innovation.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* School Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition"
          >
            <FaBullseye className="text-teal-500 w-16 h-16 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Mission</h2>
              <p className="text-gray-700">
                Edufoster School was founded with the mission of providing affordable quality education 
                while nurturing the holistic development of every child.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-teal-50 shadow-lg rounded-2xl p-8 flex flex-col md:flex-row-reverse items-center gap-6 hover:shadow-2xl transition"
          >
            <FaEye className="text-teal-600 w-16 h-16 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Vision</h2>
              <p className="text-gray-700">
                To nurture future leaders with knowledge, discipline, and values, preparing them for a 
                bright and responsible future.
              </p>
            </div>
          </motion.div>

          {/* Principal’s Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition"
          >
            <FaChalkboardTeacher className="text-teal-500 w-16 h-16 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Principal’s Message</h2>
              <p className="text-gray-700">
                We believe in holistic development and creating a safe, inspiring learning environment 
                where every child can excel academically, socially, and creatively.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="/admissions"
              className="inline-block bg-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 transition transform hover:scale-105"
            >
              Admissions Open
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
