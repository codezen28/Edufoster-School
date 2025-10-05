import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowBg(true);
      } else if (currentScrollY < lastScrollY && currentScrollY < 100) {
        setShowBg(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        showBg ? "backdrop-blur-md bg-white/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="../../public/images/school_logo.jpg"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <h1
              className={`text-2xl font-bold font-montserrat transition-colors duration-500 ${
                showBg ? "text-teal-600" : "text-white"
              }`}
            >
              Edu FOSTER School
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex space-x-8 items-center font-montserrat text-lg transition-colors duration-500 ${
              showBg ? "text-gray-800" : "text-white"
            }`}
          >
            {["Home", "About", "Academics", "Admissions", "Gallery", "Contact"].map(
              (link, i) => (
                <Link
                  key={i}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="relative hover:text-teal-400 transition-all duration-300"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className={`md:hidden flex items-center ${showBg ? "text-gray-800" : "text-white"}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none focus:ring-2 focus:ring-teal-500 p-1 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md px-2 pt-2 pb-4 space-y-2 text-gray-800 shadow-md font-montserrat text-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {["Home", "About", "Academics", "Admissions", "Gallery", "Contact"].map(
              (link, i) => (
                <Link
                  key={i}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block px-3 py-2 rounded hover:bg-teal-100 transition tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
