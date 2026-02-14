import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-montserrat relative">
      {/* Navbar */}
      <Navbar />

      {/* 🌟 Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/11/29/11/03/kids-2985782_1280.jpg")`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6 max-w-3xl z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Welcome to <br />{" "}
            <span className="text-teal-400">Edu FOSTER School</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
            Empowering students through excellence in education, values, and
            innovation.
          </p>

          {/* ⭐ USING LINK INSTEAD OF <a> */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/admissions"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 🎓 Why Choose Us */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-teal-700"
          >
            Why Choose Edufoster
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Teachers",
                desc: "Learn from passionate educators dedicated to nurturing potential.",
              },
              {
                title: "Holistic Development",
                desc: "Balanced focus on academics, creativity, and sports.",
              },
              {
                title: "Safe Environment",
                desc: "A secure, inclusive, and inspiring learning atmosphere.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-teal-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📘 Academics Section (Updated + Kindergarten) */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-teal-700"
          >
            Our Academics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kindergarten */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-yellow-700">
                Kindergarten (KG)
              </h3>
              <p className="text-gray-700">
                Early childhood learning focused on playful activities, motor
                skills, basic literacy, and social development.
              </p>
            </motion.div>

            {/* Primary */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                Primary (Classes 1–5)
              </h3>
              <p className="text-gray-700">
                Fundamentals, creativity, joyful learning & confidence building.
              </p>
            </motion.div>

            {/* Middle */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-teal-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-teal-700">
                Middle (Classes 6–8)
              </h3>
              <p className="text-gray-700">
                Strong focus on analytical skills, science fundamentals, and
                advanced learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 🖼️ Gallery Preview — Only 3 Images (Photo4, Photo5, Photo6) */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-bold mb-10 text-teal-700"
    >
      School Moments
    </motion.h2>

    {/* 3-PHOTO GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "/assets/images/Photo4.jpg",
        "/assets/images/Photo5.jpg",
        "/assets/images/Photo6.jpg",
      ].map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Gallery Preview ${i + 1}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="rounded-lg shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      ))}
    </div>

    {/* View More Photos → Redirect to Gallery Page */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8"
    >
      <Link
        to="/gallery"
        className="inline-block bg-teal-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 transition"
      >
        View More Photos
      </Link>
    </motion.div>
  </div>
</section>


      {/* 🏫 Admissions CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Admissions Open for 2026–27
          </h2>
          <p className="mb-8 text-lg md:text-xl text-teal-100">
            Join a school where every child’s potential is nurtured.
          </p>

          {/* ⭐ USING LINK HERE TOO */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/admissions"
              className="inline-block bg-white text-teal-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-teal-50 transition"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
