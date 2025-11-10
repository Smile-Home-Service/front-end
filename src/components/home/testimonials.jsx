"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Baby, PawPrint } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Working Mom",
    service: "Home Cleaning",
    rating: 5,
    content:
      "As a busy mom of two, HomeSave has been a lifesaver! The cleaners are so careful with the kids' toys and use products that don't trigger allergies. Our home has never been cleaner or safer.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    familyFriendly: true,
  },
  {
    id: 2,
    name: "Mike & Lisa Chen",
    role: "Young Family",
    service: "Plumbing Repair",
    rating: 5,
    content:
      "When our kitchen sink burst, HomeServe had a plumber at our door in under an hour! They worked around our toddler's nap schedule and fixed everything perfectly. Truly family-first service!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    emergency: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Pet Owner",
    service: "Beauty Services",
    rating: 4.8,
    content:
      "The at-home spa service was incredible! The professional was so understanding about my anxious dog and created a relaxing environment for both of us. Finally, some me-time without worry!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    petFriendly: true,
  },
];

const categories = [
  { id: "all", name: "All Families" },
  { id: "cleaning", name: "Cleaning" },
  { id: "repair", name: "Repairs" },
  { id: "beauty", name: "Beauty" },
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) =>
          t.service.toLowerCase().includes(activeCategory)
        );

  return (
    <div className="py-20 bg-gradient-to-br from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Family Stories
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Loved by Families Like Yours
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover why thousands of families trust HomeServe to make their
            homes cleaner, safer, and happier.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-indigo-600 to-rose-600 text-white shadow-md"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

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
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-rose-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-indigo-600 text-sm">
                        {testimonial.service}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      {testimonial.familyFriendly && (
                        <Baby className="w-4 h-4 text-rose-500" />
                      )}
                      {testimonial.petFriendly && (
                        <PawPrint className="w-4 h-4 text-emerald-500" />
                      )}
                      {testimonial.emergency && (
                        <Sparkles className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl p-8 text-white shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-indigo-100">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-indigo-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-indigo-100">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-indigo-100">Family Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
