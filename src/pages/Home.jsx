import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-montserrat relative">
      {/* Navbar */}
      <Navbar />

      {/* 🌟 Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/11/29/11/03/kids-2985782_1280.jpg")`,
          }}
        ></div>

        {/* Dark Overlay + Blur */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6 max-w-3xl z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Welcome to <br /> <span className="text-teal-400">Edu FOSTER School</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
            Empowering students through excellence in education, values, and innovation.
          </p>
          <motion.a
            href="/admissions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            Apply Now
          </motion.a>
        </motion.div>

        {/* Floating Hero Icons */}
        {["🎒", "📚", "✏️", "🖍️"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-5xl opacity-30"
            initial={{ y: 0, x: Math.random() * 100 + "%" }}
            animate={{ y: [0, -25, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4 + Math.random() * 2,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </section>

      {/* 🎓 Why Choose Us Section */}
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
                <h3 className="text-xl font-semibold mb-2 text-teal-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Why Choose Icons */}
        {["📚", "✏️", "🎨"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-30"
            initial={{ y: 0, x: Math.random() * 100 + "%" }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4 + Math.random() * 2,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 30}%`,
              top: `${10 + i * 15}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </section>

      {/* 📘 Academics Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Primary (Classes 1–5)",
                desc: "Focus on fundamentals, creativity, and joyful learning.",
              },
              {
                title: "Middle (Classes 6–8)",
                desc: "Strengthening analytical and critical thinking skills.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-teal-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-2 text-teal-700">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Academics Icons */}
        {["📖", "🖍️", "🎓"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-30"
            initial={{ y: 0, x: Math.random() * 100 + "%" }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3 + Math.random() * 2,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + i * 20}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </section>

      {/* 🖼️ Gallery Preview */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355057_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/10/05/11/15/school-4527712_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/12/09/18/ai-generated-9041893_1280.jpg",].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="School Event"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="rounded-lg shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          <motion.a
            href="/gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-teal-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 transition"
          >
            View All Photos
          </motion.a>
        </div>
      </section>

      {/* 🏫 Admissions CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Admissions Open for 2025–26
          </h2>
          <p className="mb-8 text-lg md:text-xl text-teal-100">
            Join a school where every child’s potential is celebrated and nurtured.
          </p>
          <motion.a
            href="/admissions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-teal-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-teal-50 transition"
          >
            Apply Now
          </motion.a>
        </motion.div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
