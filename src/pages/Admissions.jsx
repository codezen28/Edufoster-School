import { motion } from "framer-motion";
import { FaFileAlt, FaUpload, FaUserCheck, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Admissions() {
  return (
    <div className="font-montserrat relative">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2022/07/31/06/38/school-7355056_1280.jpg")`,
          }}
        ></div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-yellow-300/70"></div> */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          <span className="text-teal-400">Admissions</span>  Open
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md">
            Join Edufoster School for the Academic Year 2025–26
          </p>
        </motion.div>
      </section>

      {/* Admission Steps */}
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
              { step: "Step 1", desc: "Collect the admission form from the school office or download it online through our website.", icon: <FaFileAlt /> },
              { step: "Step 2", desc: "Submit the filled admission form along with the required documents such as birth certificate and previous report cards.", icon: <FaUpload /> },
              { step: "Step 3", desc: "Attend a short interaction session with our teachers and principal to understand the student’s learning needs.", icon: <FaUserCheck /> },
              { step: "Step 4", desc: "Confirm admission by completing the fee payment process and receive the welcome kit for your child.", icon: <FaMoneyBillWave /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center hover:shadow-2xl transition transform hover:scale-105"
              >
                <div className="text-teal-500 w-12 h-12 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-700">{item.step}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Download Form Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="/forms/admission-form.pdf"
              className="inline-block bg-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 transition transform hover:scale-105"
            >
              Download Admission Form
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
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
          Contact our admission office for guidance and assistance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-2"
        >
          <p>Email: <span className="font-semibold">admissions@edufoster.edu.in</span></p>
          <p>Phone: <span className="font-semibold">+91 98765 43210</span></p>
        </motion.div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
      </section>

    </div>
  );
}
