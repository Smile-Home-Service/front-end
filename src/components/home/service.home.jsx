"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Wrench, Gem, Truck, Home } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Deep Home Cleaning",
    description:
      "Sparkling clean home with family-safe products. Perfect for busy families and pet owners.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "cleaning",
    rating: 4.9,
    reviews: 1245,
    price: 79,
    duration: "2-3 hours",
    professionals: 150,
    featured: true,
    familyFriendly: true,
    petFriendly: true,
  },
  {
    id: 2,
    title: "Emergency Plumbing Help",
    description:
      "Quick fixes for leaks and clogs. We understand family emergencies can't wait!",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "repair",
    rating: 4.8,
    reviews: 876,
    price: 99,
    duration: "1-2 hours",
    professionals: 95,
    featured: true,
    familyFriendly: true,
    emergency: true,
  },
  {
    id: 3,
    title: "Home Spa & Relaxation",
    description:
      "Pamper yourself at home with our certified beauty professionals. You deserve it!",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "beauty",
    rating: 4.9,
    reviews: 2310,
    price: 65,
    duration: "1-1.5 hours",
    professionals: 210,
    featured: true,
    familyFriendly: true,
  },
  {
    id: 4,
    title: "Family Moving Service",
    description:
      "Stress-free moving with special care for your precious family items and memories.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "moving",
    rating: 4.7,
    reviews: 543,
    price: 120,
    duration: "4-6 hours",
    professionals: 120,
    familyFriendly: true,
  },
];

const categories = [
  {
    id: "all",
    name: "All Services",
    icon: <Home size={20} />,
    count: services.length,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "cleaning",
    name: "Home Cleaning",
    icon: <Sparkles size={20} />,
    count: services.filter((s) => s.category === "cleaning").length,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "repair",
    name: "Repairs & Fixes",
    icon: <Wrench size={20} />,
    count: services.filter((s) => s.category === "repair").length,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "beauty",
    name: "Beauty & Care",
    icon: <Gem size={20} />,
    count: services.filter((s) => s.category === "beauty").length,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "moving",
    name: "Moving Help",
    icon: <Truck size={20} />,
    count: services.filter((s) => s.category === "moving").length,
    color: "from-amber-500 to-orange-500",
  },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const handleViewService = () => {
    redirect("/services");
  };

  return (
    <div className="py-20 bg-gradient-to-br from-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Family Services
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Services for Your Home
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From emergency fixes to much-needed pampering, we offer
            comprehensive home services designed with families in mind.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="mt-12 flex overflow-x-auto pb-4 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex space-x-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-4 rounded-2xl whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:shadow-md border border-gray-100"
                }`}
              >
                <span className="mr-3">{category.icon}</span>
                {category.name}
                <span
                  className={`ml-3 px-2 py-1 rounded-full text-xs ${
                    activeCategory === category.id
                      ? "bg-white/20"
                      : "bg-gray-100"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <Image
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={service.image}
                  alt={service.title}
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {service.featured && (
                    <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  {service.familyFriendly && (
                    <span className="bg-rose-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Family
                    </span>
                  )}
                  {service.petFriendly && (
                    <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Pet-Friendly
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold">
                      {service.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${service.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {service.professionals}+ Pros
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-900 font-medium">
                      {service.reviews}
                    </span>
                    <span className="ml-1">reviews</span>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-indigo-600 to-rose-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <button
            className="text-indigo-600 font-semibold hover:text-indigo-700 text-lg hover:cursor-pointer"
            onClick={() => handleViewService()}
          >
            View All Services →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// Add missing icons
const Clock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);
