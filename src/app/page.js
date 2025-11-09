"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Star, MapPin, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

import { services, categories, cities } from "@/utils/data/home.data";
import HeroSection from "@/components/home/hero-section";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";

export default function HomeServiceApp() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      {/* How It Works Section */}
      <HowItWorks />
      {/* Services Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Everything you need for your home
            </motion.p>
            <motion.p
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From cleaning to repairs, beauty to moving - we have got you
              covered.
            </motion.p>
          </div>

          {/* Category Filter */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full ${
                  activeCategory === category.id
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-gray-100 text-gray-700"
                } hover:bg-indigo-100 hover:text-indigo-700 transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 relative">
                  <Image
                    width={100}
                    height={100}
                    className="h-48 w-full object-cover"
                    src={service.image}
                    alt={service.title}
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-600">
                          {service.rating}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {service.reviews} reviews
                    </span>
                    <motion.button
                      className="bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Cities Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Locations
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Serving cities across the country
            </motion.p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  className="bg-gray-50 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#f0f4ff" }}
                >
                  <MapPin className="h-6 w-6 text-indigo-600 mx-auto" />
                  <p className="mt-2 font-medium text-gray-900">{city}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-600">
              Do not see your city? We are expanding rapidly!
            </p>
            <button className="mt-2 text-indigo-600 font-medium hover:text-indigo-700">
              Request HomeServe in your area →
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
