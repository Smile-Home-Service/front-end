"use client";

import { motion } from "framer-motion";
import { Users, Globe, CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <div className="relative bg-indigo-600">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Learn more about our journey, mission, and the team dedicated to
            bringing you the best home services.
          </motion.p>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 text-lg">
              HomeServe started with a simple mission: to make home services
              accessible, reliable, and stress-free. From small repairs to large
              installations, our team ensures quality and trust in every task.
            </p>
          </motion.div>
          <motion.img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
            alt="Company story"
            className="rounded-xl shadow-lg w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Globe className="w-10 h-10 mx-auto text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-600">
              To provide fast, reliable, and high-quality home services to every
              household.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CheckCircle className="w-10 h-10 mx-auto text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="mt-2 text-gray-600">
              To be the most trusted home services platform, simplifying life
              for everyone.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Users className="w-10 h-10 mx-auto text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Our Team
            </h3>
            <p className="mt-2 text-gray-600">
              A passionate group of professionals dedicated to making your home
              life easier.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to get started?
        </motion.h2>
        <motion.a
          href="#"
          className="mt-6 inline-block px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-transform transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Service
        </motion.a>
      </div>
    </div>
  );
}
