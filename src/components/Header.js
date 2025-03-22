import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check for user's preferred color scheme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-between items-center">
            <div className="z-50 animate-fade-in">
              <Link to="/">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    {/* Replace with your actual logo or initial */}
                    <img
                      src="/logo.png"
                      alt="SalesCue Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/" className="flex items-center pl-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SalesCue
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`
              }
            >
              FAQ
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
              isScrolled
                ? "text-gray-700 dark:text-gray-300"
                : isDarkMode
                ? "text-white"
                : "text-black"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                FAQ
              </NavLink>
              <div className="pt-2 flex items-center">
                <Link
                  to="/contact"
                  className="flex-1 px-5 py-2.5 text-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
