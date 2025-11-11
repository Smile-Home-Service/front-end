"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Baby, PawPrint } from "lucide-react";
import { useGetTestimonialsQuery } from "@/lib/api/testimonial.api";

const categories = [
  { id: "all", name: "All Families" },
  { id: "cleaning", name: "Cleaning" },
  { id: "repair", name: "Repairs" },
  { id: "beauty", name: "Beauty" },
];

// Helper function to determine service type and icons
const getServiceInfo = (service) => {
  const serviceLower = service.toLowerCase();

  if (serviceLower.includes("clean")) {
    return {
      type: "cleaning",
      icons: [<Baby key="baby" className="w-4 h-4 text-rose-500" />],
    };
  }
  if (serviceLower.includes("repair") || serviceLower.includes("plumb")) {
    return {
      type: "repair",
      icons: [<Sparkles key="sparkles" className="w-4 h-4 text-blue-500" />],
    };
  }
  if (serviceLower.includes("beauty") || serviceLower.includes("spa")) {
    return {
      type: "beauty",
      icons: [<PawPrint key="paw" className="w-4 h-4 text-emerald-500" />],
    };
  }

  return { type: "other", icons: [] };
};

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);

  const {
    data: testimonialsData,
    error,
    isLoading,
    isFetching,
  } = useGetTestimonialsQuery({
    page,
    limit: 10,
    status: "active",
    is_deleted: 0,
    order: "desc",
  });

  // Use API data or fallback
  const displayTestimonials = testimonialsData?.items || [];
  const pagination = testimonialsData?.pagination;

  // Filter testimonials based on category
  const filteredTestimonials =
    activeCategory === "all"
      ? displayTestimonials
      : displayTestimonials.filter((testimonial) => {
          const serviceInfo = getServiceInfo(testimonial.service);
          return serviceInfo.type === activeCategory;
        });

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="py-20 bg-linear-to-br from-white to-rose-50/30">
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

        {/* Loading State */}
        {(isLoading || isFetching) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg border border-gray-100">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600 mr-2"></div>
              <span className="text-gray-600 text-sm">
                Loading testimonials...
              </span>
            </div>
          </motion.div>
        )}

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
                    ? "bg-linear-to-r from-indigo-600 to-rose-600 text-white shadow-md"
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
          {filteredTestimonials.map((testimonial, index) => {
            const serviceInfo = getServiceInfo(testimonial.service);

            return (
              <motion.div
                key={testimonial.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-linear-to-r from-indigo-100 to-rose-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Quote className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
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
                    src={
                      testimonial.image ||
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    }
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
                      <div className="flex space-x-1">{serviceInfo.icons}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls - Only show if we have API data */}
        {testimonialsData?.pagination &&
          testimonialsData.pagination.totalPages > 1 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                {[...Array(testimonialsData.pagination.totalPages)].map(
                  (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setPage(index + 1)}
                      className={`px-4 py-2 rounded-lg font-medium mx-1 ${
                        page === index + 1
                          ? "bg-indigo-600 text-white"
                          : "text-gray-600 hover:text-indigo-600"
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}

        {/* Stats */}
        <motion.div
          className="mt-16 bg-linear-to-r from-indigo-600 to-rose-600 rounded-2xl p-8 text-white shadow-2xl"
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
