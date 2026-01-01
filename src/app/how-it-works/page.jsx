"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ClipboardList,
  UserCheck,
  Calendar,
  CreditCard,
  Star,
  Clock,
  Shield,
  Search,
  Wrench,
  Sparkles,
  Truck,
  Leaf,
  Settings,
  Heart,
  Baby,
  PawPrint,
  SparklesIcon,
  CheckCircle2,
} from "lucide-react";

export default function HowItWorks() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeStep, setActiveStep] = useState(1);

  const services = [
    {
      id: 1,
      name: "Home Cleaning",
      icon: <Sparkles className="w-6 h-6" />,
      category: "cleaning",
      familyFriendly: true,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      name: "Plumbing Help",
      icon: <Wrench className="w-6 h-6" />,
      category: "repair",
      emergency: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Beauty & Spa",
      icon: <SparklesIcon className="w-6 h-6" />,
      category: "beauty",
      familyFriendly: true,
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 4,
      name: "Family Moving",
      icon: <Truck className="w-6 h-6" />,
      category: "moving",
      familyFriendly: true,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 5,
      name: "Gardening",
      icon: <Leaf className="w-6 h-6" />,
      category: "cleaning",
      petFriendly: true,
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 6,
      name: "Electrical Safety",
      icon: <Settings className="w-6 h-6" />,
      category: "repair",
      familyFriendly: true,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Tell Us What You Need",
      description:
        "Browse our family-friendly services and pick what works for your home",
      icon: <Search className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1581578021517-5d8ad8597850?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "Pick Your Time",
      description: "Choose a date and time that fits your family's schedule",
      icon: <Calendar className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Meet Your Helper",
      description:
        "We'll match you with a trusted, family-approved professional",
      icon: <UserCheck className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      title: "Relax & Enjoy",
      description:
        "Your pro takes care of everything while you focus on family time",
      icon: <ClipboardList className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      title: "Happy Home, Easy Pay",
      description: "Only pay when you're completely satisfied with the results",
      icon: <CreditCard className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    {
      id: "cleaning",
      name: "Cleaning",
      count: services.filter((s) => s.category === "cleaning").length,
    },
    {
      id: "repair",
      name: "Repairs",
      count: services.filter((s) => s.category === "repair").length,
    },
    {
      id: "beauty",
      name: "Beauty",
      count: services.filter((s) => s.category === "beauty").length,
    },
    {
      id: "moving",
      name: "Moving",
      count: services.filter((s) => s.category === "moving").length,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 bg-rose-100 rounded-full text-rose-700 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Family-Friendly Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
            >
              How HomeService
              <span className="block bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Works for Families
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Simple, stress-free home services designed around your family's
              schedule. From quick fixes to much-needed pampering, we make it
              easy.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple Steps to a Happier Home
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Designed for busy families who want quality service without the
            hassle
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Steps Navigation */}
          <div className="lg:w-2/5">
            <div className="space-y-4">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                    activeStep === step.id
                      ? "bg-white border-indigo-500 shadow-xl scale-105"
                      : "bg-white/80 border-transparent hover:border-indigo-200 hover:shadow-lg"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                        activeStep === step.id
                          ? "bg-gradient-to-r from-indigo-600 to-rose-600 text-white shadow-lg"
                          : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            activeStep === step.id
                              ? "bg-indigo-100 text-indigo-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {step.id}
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Family Benefits Sidebar */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-indigo-50 to-rose-50 rounded-2xl p-6 border border-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
                Perfect for Families
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <Baby className="w-4 h-4 text-rose-500 mr-3" />
                  Child-safe products & practices
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <PawPrint className="w-4 h-4 text-rose-500 mr-3" />
                  Pet-friendly professionals
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="w-4 h-4 text-rose-500 mr-3" />
                  Schedule around naptime & school
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Shield className="w-4 h-4 text-rose-500 mr-3" />
                  All pros background-checked
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step Content */}
          <div className="lg:w-3/5">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4">
                      {activeStep}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {steps[activeStep - 1].title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-lg">
                        {steps[activeStep - 1].description}
                      </p>
                    </div>
                  </div>

                  {/* Step-specific content */}
                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          Browse Family-Friendly Services
                        </h4>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedCategory(category.id)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                selectedCategory === category.id
                                  ? "bg-gradient-to-r from-indigo-600 to-rose-600 text-white shadow-lg"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              }`}
                            >
                              {category.name}
                              <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                                {category.count}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {services
                            .filter(
                              (service) =>
                                selectedCategory === "all" ||
                                service.category === selectedCategory
                            )
                            .map((service) => (
                              <motion.div
                                key={service.id}
                                whileHover={{ scale: 1.02 }}
                                className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl text-white shadow-lg`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="bg-white/20 p-2 rounded-xl">
                                      {service.icon}
                                    </div>
                                    <h5 className="ml-3 font-semibold">
                                      {service.name}
                                    </h5>
                                  </div>
                                  <div className="flex space-x-1">
                                    {service.familyFriendly && (
                                      <Baby className="w-4 h-4 text-white/80" />
                                    )}
                                    {service.petFriendly && (
                                      <PawPrint className="w-4 h-4 text-white/80" />
                                    )}
                                    {service.emergency && (
                                      <Clock className="w-4 h-4 text-white/80" />
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-indigo-50 to-rose-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          Choose What Works for Your Family
                        </h4>
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {["Morning", "Afternoon", "Evening"].map((time) => (
                            <div
                              key={time}
                              className="text-center p-3 bg-white rounded-xl shadow-sm border-2 border-indigo-200"
                            >
                              <div className="font-semibold text-gray-900">
                                {time}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                After school drop-off
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white rounded-xl p-4">
                          <h5 className="font-semibold mb-3">
                            Popular Family Times
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            {["9:00 AM", "2:00 PM", "10:00 AM", "4:00 PM"].map(
                              (time) => (
                                <div
                                  key={time}
                                  className="text-center p-2 bg-indigo-50 rounded-lg text-indigo-700 font-medium hover:bg-indigo-100 cursor-pointer transition-colors"
                                >
                                  {time}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          Your Family-Approved Professional
                        </h4>
                        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-rose-50 rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80"
                            alt="Professional"
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm"
                          />
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900">
                              Sarah Johnson
                            </h5>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-600">
                                4.9 (324 family reviews)
                              </span>
                            </div>
                            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Baby className="w-4 h-4 mr-1 text-rose-500" />
                                Kid-friendly
                              </div>
                              <div className="flex items-center">
                                <PawPrint className="w-4 h-4 mr-1 text-rose-500" />
                                Pet-friendly
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                                Verified
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-rose-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                          Confirm Your Helper
                        </button>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-indigo-50 to-rose-50 rounded-2xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          What Families Love
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              icon: <Clock className="w-5 h-5" />,
                              text: "On-time arrival",
                            },
                            {
                              icon: <Baby className="w-5 h-5" />,
                              text: "Child-safe practices",
                            },
                            {
                              icon: <Sparkles className="w-5 h-5" />,
                              text: "Spotless cleanup",
                            },
                            {
                              icon: <Heart className="w-5 h-5" />,
                              text: "Family-focused",
                            },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center bg-white p-3 rounded-xl"
                            >
                              <div className="text-indigo-600 mr-3">
                                {item.icon}
                              </div>
                              <span className="text-gray-700 font-medium">
                                {item.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 5 && (
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                          Simple, Transparent Pricing
                        </h4>
                        <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">
                              Home Cleaning Service
                            </span>
                            <span className="font-semibold">$79.00</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">
                              Eco-friendly Products
                            </span>
                            <span className="font-semibold">$0.00</span>
                          </div>
                          <div className="flex justify-between items-center text-lg font-bold pt-3 border-t border-gray-200">
                            <span>Total</span>
                            <span className="text-indigo-600">$79.00</span>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                          <div className="flex items-center">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                            <span className="text-green-800 font-medium">
                              No advance payment required
                            </span>
                          </div>
                          <p className="text-green-700 text-sm mt-1">
                            Pay only when you're completely satisfied with the
                            service
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step Image */}
                <div className="hidden lg:block">
                  <motion.img
                    src={steps[activeStep - 1].image}
                    alt={`Step ${activeStep}`}
                    className="rounded-2xl shadow-lg w-80 object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Family Benefits Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Designed with Families in Mind
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything we do is focused on making your family's life easier
              and your home happier
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Baby className="w-8 h-8" />,
                title: "Child-Safe Services",
                description:
                  "All products and methods are safe for children and babies",
              },
              {
                icon: <PawPrint className="w-8 h-8" />,
                title: "Pet-Friendly Pros",
                description:
                  "Our professionals love and understand family pets",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Scheduling",
                description: "Book around school, naps, and family activities",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Trusted & Verified",
                description:
                  "Every pro is background-checked and family-approved",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto text-white">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
