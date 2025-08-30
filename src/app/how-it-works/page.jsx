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
  ArrowRight,
  Search,
  Wrench,
  Sparkles,
  Home,
  Truck,
  Leaf,
  Settings,
} from "lucide-react";

export default function HowItWorks() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeStep, setActiveStep] = useState(1);

  const services = [
    {
      id: 1,
      name: "Plumbing",
      icon: <Wrench className="w-6 h-6" />,
      category: "repair",
    },
    {
      id: 2,
      name: "Electrical",
      icon: <Settings className="w-6 h-6" />,
      category: "repair",
    },
    {
      id: 3,
      name: "Cleaning",
      icon: <Sparkles className="w-6 h-6" />,
      category: "maintenance",
    },
    {
      id: 4,
      name: "Moving",
      icon: <Truck className="w-6 h-6" />,
      category: "other",
    },
    {
      id: 5,
      name: "Gardening",
      icon: <Leaf className="w-6 h-6" />,
      category: "maintenance",
    },
    {
      id: 6,
      name: "Painting",
      icon: <Home className="w-6 h-6" />,
      category: "renovation",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Choose a Service",
      description:
        "Browse our catalog of home services and select what you need",
      icon: <Search className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Book Online",
      description: "Pick a date and time that works best for you",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Confirm Pro",
      description: "We'll match you with a vetted professional in your area",
      icon: <UserCheck className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Get It Done",
      description:
        "Your pro arrives on time and completes the job to your satisfaction",
      icon: <ClipboardList className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Pay Securely",
      description: "Review, pay securely, and rate your experience",
      icon: <CreditCard className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            How It Works
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Getting your home projects done has never been easier. Follow these
            simple steps to book a professional service.
          </motion.p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Simple Process, Professional Results
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From booking to completion, we make home services hassle-free
          </p>
        </motion.div>

        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:space-x-8 justify-between">
          {/* Steps Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all ${
                    activeStep === step.id
                      ? "bg-blue-50 border-2 border-blue-500 shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        activeStep === step.id
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-500"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 h-full"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Step {activeStep}: {steps[activeStep - 1].title}
                  </h3>
                  <p className="mt-4 text-gray-600 text-lg">
                    {steps[activeStep - 1].description}
                  </p>

                  {activeStep === 1 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Browse by Category
                      </h4>
                      <div className="flex space-x-3 mb-6">
                        {[
                          "all",
                          "repair",
                          "maintenance",
                          "renovation",
                          "other",
                        ].map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              selectedCategory === category
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {services
                          .filter(
                            (service) =>
                              selectedCategory === "all" ||
                              service.category === selectedCategory
                          )
                          .map((service) => (
                            <div
                              key={service.id}
                              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                              <div className="text-blue-500 mb-2">
                                {service.icon}
                              </div>
                              <h5 className="font-medium text-gray-900">
                                {service.name}
                              </h5>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="mt-6">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Select Date & Time
                        </h4>
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                            <div
                              key={day}
                              className={`text-center p-2 rounded-lg ${
                                day === 3
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-100"
                              }`}
                            >
                              <div className="text-xs">May</div>
                              <div className="font-bold">{day + 10}</div>
                            </div>
                          ))}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Available Time Slots
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                          {["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"].map(
                            (time) => (
                              <div
                                key={time}
                                className="text-center p-2 bg-gray-100 rounded-lg hover:bg-blue-100 cursor-pointer"
                              >
                                {time}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="mt-6">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Your Matched Professional
                        </h4>
                        <div className="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                            alt="Professional"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <h5 className="font-bold">Michael Johnson</h5>
                            <div className="flex items-center mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-600">
                                4.9 (128 reviews)
                              </span>
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <Shield className="w-4 h-4 mr-1" /> Verified &
                              Insured
                            </div>
                          </div>
                        </div>
                        <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                          Confirm Professional
                        </button>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="mt-6">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          What to Expect
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <Clock className="w-5 h-5 text-blue-500 mr-2" />{" "}
                            On-time arrival
                          </li>
                          <li className="flex items-center">
                            <Shield className="w-5 h-5 text-blue-500 mr-2" />{" "}
                            Fully equipped professionals
                          </li>
                          <li className="flex items-center">
                            <ClipboardList className="w-5 h-5 text-blue-500 mr-2" />{" "}
                            Transparent pricing
                          </li>
                          <li className="flex items-center">
                            <Star className="w-5 h-5 text-blue-500 mr-2" />{" "}
                            Quality guaranteed
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-semibold">
                            Your Upcoming Appointment
                          </h5>
                          <p className="mt-2">
                            Plumbing Repair - May 13th at 11:00 AM
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            123 Main St, Apt 4B, New York, NY
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 5 && (
                    <div className="mt-6">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Secure Payment
                        </h4>
                        <div className="p-4 border border-gray-200 rounded-lg mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span>Service Fee</span>
                            <span>$85.00</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span>Parts & Materials</span>
                            <span>$24.50</span>
                          </div>
                          <div className="flex justify-between items-center font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                            <span>Total</span>
                            <span>$109.50</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-medium mb-2">Payment Method</h5>
                          <div className="flex space-x-4">
                            <div className="border-2 border-blue-500 rounded-lg p-3 flex items-center">
                              <CreditCard className="w-6 h-6 mr-2" />
                              <span>Credit Card</span>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-3 flex items-center">
                              <span>PayPal</span>
                            </div>
                          </div>
                        </div>

                        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                          Pay Securely
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ml-8 hidden lg:block">
                  <div className="sticky top-24">
                    <img
                      src={
                        activeStep === 1
                          ? "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=300&q=80"
                          : activeStep === 2
                          ? "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=300&q=80"
                          : activeStep === 3
                          ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                          : activeStep === 4
                          ? "https://images.unsplash.com/photo-1581578021517-5d8ad8597850?auto=format&fit=crop&w=300&q=80"
                          : "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=300&q=80"
                      }
                      alt={`Step ${activeStep}`}
                      className="rounded-2xl shadow-lg w-64"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose HomeServe?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're changing the way you take care of your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Verified Professionals
              </h3>
              <p className="mt-4 text-gray-600">
                Every pro is background-checked, insured, and rated by customers
                like you.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <CreditCard className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Transparent Pricing
              </h3>
              <p className="mt-4 text-gray-600">
                Know the cost upfront with no hidden fees. Payment is only
                released when you're satisfied.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                On-Time Guarantee
              </h3>
              <p className="mt-4 text-gray-600">
                Your pro will arrive on time as scheduled or we'll make it
                right.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 -mr-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 bg-indigo-500/20 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who trust us with their homes
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-900 bg-white rounded-2xl shadow-lg hover:bg-gray-50 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Service Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
