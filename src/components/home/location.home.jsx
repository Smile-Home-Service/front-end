"use client";

import { motion } from "framer-motion";
import { MapPin, Heart, TrendingUp } from "lucide-react";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "San Francisco",
  "Charlotte",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington DC",
];

export default function LocationsSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Service Areas
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Serving Families Nationwide
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're growing rapidly to bring family-friendly home services to more
            communities across the country.
          </motion.p>
        </div>

        {/* Cities Grid */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "#f0f4ff" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="font-semibold text-gray-900">{city}</p>
                <div className="mt-2 flex items-center justify-center text-xs text-gray-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Available Now
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expansion CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-rose-50 rounded-2xl p-8 border border-indigo-100">
            <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Coming to Your City Soon!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're expanding rapidly to serve more families. Request HomeServe
              in your area and be the first to know when we arrive.
            </p>
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Your City
              <TrendingUp className="ml-2 w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
