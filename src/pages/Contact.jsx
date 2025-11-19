import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
   const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    emailjs
      .sendForm(
        "service_j14311z",
        "template_u1abqoz",
        formRef.current,
        "hqjStA7IMPnw-KEf1"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="font-montserrat relative">

      {/* Navbar */}
      <Navbar />

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919425385960"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919425385960"
          className="bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>

      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-80 flex items-center justify-center text-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/11/29/11/03/kids-2985782_1280.jpg"
          alt="Contact Background"
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
  {/* Address */}
  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:items-start gap-2 hover:shadow-2xl transition transform hover:scale-105">
    <MapPinIcon className="w-6 h-6 text-teal-500" />
    <a
      href="https://maps.app.goo.gl/g3avii68TTq1s3218"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 hover:text-teal-500 underline transition-colors duration-200"
      aria-label="View school location on Google Maps"
    >
      Near Gandhi Chauraha, Khajuraho, M.P, India
    </a>
  </div>

  {/* Phone / Call & WhatsApp */}
  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:items-start gap-2 hover:shadow-2xl transition transform hover:scale-105">
    <PhoneIcon className="w-6 h-6 text-teal-500" />
    <div className="flex flex-col items-center md:items-start">
      <a
        href="tel:+919425385960"
        className="text-gray-700 hover:text-teal-500 underline transition-colors duration-200"
        aria-label="Call Edufoster School"
      >
        +91 94253 85960
      </a>
     
    </div>
  </div>

  {/* Email */}
  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center md:items-start gap-2 hover:shadow-2xl transition transform hover:scale-105">
    <EnvelopeIcon className="w-6 h-6 text-teal-500" />
    <a
      href="mailto:info@edufosterschool.com"
      className="text-gray-700 hover:text-teal-500 underline transition-colors duration-200"
      aria-label="Email Edufoster School admissions"
    >
      info@edufosterschool.com
    </a>
  </div>
</motion.div>


          {/* Contact Form */}
            <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-2xl p-8 relative"
    >
      {/* SUCCESS POPUP */}
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Message Sent Successfully!
        </motion.div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">
        Send Us a Message
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        {/* Mobile Number */}
        <input
          type="tel"
          name="user_phone"
          placeholder="Your Mobile Number"
          required
          pattern="[0-9]{10}"
          className="w-full md:col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full md:col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none h-40"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="md:col-span-2 bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* WhatsApp + Call Buttons */}
      
    </motion.div>

        </div>
      </section>

      {/* Decorative Circles */}
      <div className="absolute -top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}
