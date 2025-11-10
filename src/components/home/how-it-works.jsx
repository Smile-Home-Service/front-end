"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  UserCheck,
  ClipboardList,
  CreditCard,
  Heart,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Service",
    description:
      "Browse our family-friendly services and pick what works for your home",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Pick Your Time",
    description: "Select a date and time that fits your family's busy schedule",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Meet Your Helper",
    description: "We match you with a trusted, family-approved professional",
    icon: <UserCheck className="w-8 h-8" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "Enjoy & Relax",
    description: "Your pro handles everything while you focus on family time",
    icon: <ClipboardList className="w-8 h-8" />,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 5,
    title: "Easy Payment",
    description: "Pay securely only when you're completely satisfied",
    icon: <CreditCard className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-500",
  },
];

export default function HowItWorks() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple Process
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How HomeServe Works for Families
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Designed for busy families, our process is simple, convenient, and
            focused on your comfort and safety.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 opacity-20 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.id}
                  </div>
                </div>

                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 mt-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-5 h-5 mr-2" />
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
