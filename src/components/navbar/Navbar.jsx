"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartHandshake } from "lucide-react";
import { fadeDown, fadeIn, scaleOnHover } from "@/utils/animation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", current: true },
    { name: "Services", href: "/services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-white shadow-sm"
      }`}
      variants={fadeDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center font-bold text-gray-900 text-xl"
            {...scaleOnHover}
          >
            <HeartHandshake className="h-8 w-8 text-indigo-600" />
            <span className="ml-2">HomeServe</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                  link.current
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
              Sign In
            </button>
            <motion.button
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              {...scaleOnHover}
            >
              Become a Pro
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100/50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
              className={`pt-2 pb-3 space-y-1 ${
                isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors ${
                    link.current
                      ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                  Sign In
                </button>
                <button className="mt-2 block w-full text-left px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                  Become a Pro
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
