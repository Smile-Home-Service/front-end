"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { testimonials } from "@/utils/data/home.data";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "cleaning", name: "Cleaning" },
    { id: "repair", name: "Repairs" },
    { id: "beauty", name: "Beauty" },
  ];

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.service === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Customer Stories
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Loved by Homeowners
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover why thousands of families trust HomeServe for their home
            needs
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <Quote className="h-6 w-6 text-indigo-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(testimonial.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {testimonial.rating}
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-indigo-600 text-sm">
                    {testimonial.service}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
