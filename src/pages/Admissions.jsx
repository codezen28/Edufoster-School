import { motion } from "framer-motion";
import { FaFileAlt, FaUpload, FaUserCheck, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Admissions() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Create hidden link to trigger the download from PUBLIC folder
    const link = document.createElement("a");
    link.href = "/Admission Form.pdf"; // Correct public path
    link.download = "Admission Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success popup
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="font-montserrat relative">
      <Navbar />

      {/* SUCCESS POPUP */}
      {downloaded && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-6 right-6 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          📥 Admission Form Downloaded Successfully!
        </motion.div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        <div
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355056_1280.jpg")`,
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
            <span className="text-teal-400">Admissions</span> Open
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md">
            Join Edufoster School for the Academic Year 2025–26
          </p>
        </motion.div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-teal-700"
          >
            Admission Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "Step 1", desc: "Collect the admission form from the school office or download it online.", icon: <FaFileAlt /> },
              { step: "Step 2", desc: "Submit the filled form with all required documents.", icon: <FaUpload /> },
              { step: "Step 3", desc: "Attend an interaction session with teachers.", icon: <FaUserCheck /> },
              { step: "Step 4", desc: "Confirm admission through fee payment and collect the welcome kit.", icon: <FaMoneyBillWave /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-2xl transition transform hover:scale-105"
              >
                <div className="text-teal-500 w-12 h-12 mb-4 text-3xl">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-700">{item.step}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* DOWNLOAD BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={handleDownload}
              className="inline-block bg-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 transition transform hover:scale-105"
            >
              Download Admission Form
            </button>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-teal-500 text-white text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Need Help?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mb-6"
        >
          Contact our admission office for guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-2"
        >
          <p>Email: <span className="font-semibold">info@edufosterschool.com</span></p>
          <p>Phone: <span className="font-semibold">9425385960</span></p>
        </motion.div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
