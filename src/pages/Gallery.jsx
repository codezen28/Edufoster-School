import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Gallery() {
  const images = [
    "https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355057_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/10/05/11/15/school-4527712_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/12/09/18/ai-generated-9041893_1280.jpg",
    // "/images/students.jpg",
    // "/images/sports.jpg",
    // "/images/cultural.jpg",
  ];

  return (
    <div className="font-montserrat relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2017/11/29/11/03/kids-2985782_1280.jpg"
          alt="School"
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
            School <span className="text-teal-400">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            Capturing moments of learning, creativity, and fun at Edufoster School
          </p>
        </motion.div>

        {/* Decorative Circles */}
        <div className="absolute -top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-teal-700"
          >
            School Moments
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`School Event ${i + 1}`}
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="/gallery"
              className="inline-block bg-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 transition transform hover:scale-105"
            >
              View All Photos
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
