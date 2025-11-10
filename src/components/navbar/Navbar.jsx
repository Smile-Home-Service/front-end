"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  HeartHandshake,
  User,
  LogIn,
  Star,
  Phone,
  Calendar,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <HeartHandshake className="w-4 h-4" /> },
    { name: "Services", href: "/services", icon: <Star className="w-4 h-4" /> },
    {
      name: "How it Works",
      href: "/how-it-works",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      icon: <Phone className="w-4 h-4" />,
    },
  ];

  const handleSignIn = () => {
    // redirect("sign-in");
    console.log("Sign in clicked");
  };

  // Helper function to check if a link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100/50"
            : "bg-white/80 backdrop-blur-lg shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="relative">
                <div className="bg-gradient-to-r from-indigo-600 to-rose-600 p-2 rounded-2xl">
                  <HeartHandshake className="h-7 w-7 text-white" />
                </div>
              </div>
              <div className="ml-3 flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                  Smile
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Home Service
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:space-x-1 lg:items-center">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative inline-flex items-center px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-indigo-700 bg-indigo-50/80"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50/80"
                    }`}
                  >
                    <span className="mr-2 opacity-70">{link.icon}</span>
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <button
                className="flex items-center px-4 py-2 rounded-2xl text-sm font-medium text-gray-700 bg-gray-100/80 hover:bg-gray-200/80 backdrop-blur-sm transition-colors hover:cursor-pointer"
                onClick={() => handleSignIn()}
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </button>
              <button className="flex items-center px-6 py-2 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 shadow-lg hover:shadow-xl transition-all hover:cursor-pointer">
                <LogIn className="w-4 h-4 mr-2" />
                Become a Member
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-2xl text-gray-600 hover:text-indigo-600 hover:bg-gray-100/50 transition-colors backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden border-l border-gray-100/50">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
              <a
                href="/"
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="bg-gradient-to-r from-indigo-600 to-rose-600 p-2 rounded-2xl">
                  <HeartHandshake className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                    HomeServe
                  </span>
                  <span className="block text-xs text-gray-500">
                    Family Care
                  </span>
                </div>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`flex items-center w-full px-4 py-4 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-50 to-rose-50 text-indigo-700 border border-indigo-100"
                          : "text-gray-700 hover:bg-gray-50/80 hover:text-indigo-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-3 opacity-70">{link.icon}</span>
                      {link.name}
                    </a>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100/50 space-y-3">
                <button
                  className="flex items-center justify-center w-full px-4 py-4 rounded-2xl text-base font-medium text-gray-700 bg-gray-100/80 hover:bg-gray-200/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </button>
                <button
                  className="flex items-center justify-center w-full px-4 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 shadow-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Book Service Now
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-rose-50 rounded-2xl border border-indigo-100/50">
                <p className="text-sm text-gray-600 mb-2">
                  Need immediate help?
                </p>
                <div className="flex items-center text-indigo-700 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-FAMILY
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  24/7 Family Support
                </p>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Spacer to prevent content from going behind fixed navbar */}
      <div className="h-20" />
    </>
  );
}
