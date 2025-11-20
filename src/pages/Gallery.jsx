import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import galleryImages from "../data/galleryImages";

export default function Gallery() {
  const IMAGES_PER_PAGE = 9;
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  const start = (page - 1) * IMAGES_PER_PAGE;
  const end = start + IMAGES_PER_PAGE;

  const currentImages = galleryImages.slice(start, end);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="font-montserrat relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/11/29/11/03/kids-2985782_1280.jpg"
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
            School <span className="text-teal-400">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            Explore beautiful moments captured at Edufoster School
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-teal-700"
          >
            School Moments
          </motion.h2>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-1"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Photo ${i + 1}`}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-10 flex items-center justify-center gap-4 text-gray-800">

            {/* Previous Button */}
            <button
              onClick={prevPage}
              disabled={page === 1}
              className={`px-5 py-2 rounded-lg font-medium shadow 
                ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-teal-500 text-white hover:bg-teal-600"}
              `}
            >
              Previous
            </button>

            <span className="text-lg font-semibold">
              Page {page} of {totalPages}
            </span>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={page === totalPages}
              className={`px-5 py-2 rounded-lg font-medium shadow 
                ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-teal-500 text-white hover:bg-teal-600"}
              `}
            >
              Next
            </button>

          </div>
        </div>
      </section>

      {/* Fullscreen Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
