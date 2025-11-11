"use client";
import { motion } from "framer-motion";
import { contactMethods, teamMembers } from "../../utils/data/contact.data";
import {
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Heart,
  Home,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact.form";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-indigo-50">
      {/* Header */}
      <div className="relative bg-linear-to-r from-indigo-600 to-rose-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-soft-light"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full mix-blend-soft-light"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-4 h-4 mr-2" />
              Your Family's Support Team
            </motion.div>

            <motion.h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We're Here for
              <span className="block bg-linear-to-r from-white to-rose-100 bg-clip-text text-transparent mt-2">
                Your Family
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              From emergency fixes to routine maintenance, our family-friendly
              team is ready to help. We understand that your home is where your
              heart is - and we treat it that way.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center">
                <div
                  className={`bg-linear-to-r ${method.color} rounded-2xl p-3 text-white shadow-lg`}
                >
                  {method.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {method.title}
              </h3>
              <p className="mt-2 text-gray-900 font-medium text-lg">
                {method.details}
              </p>
              <p className="mt-1 text-sm text-gray-500">{method.description}</p>
              {method.emergency && (
                <div className="mt-2 inline-flex items-center px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">
                  <Clock className="w-3 h-3 mr-1" />
                  24/7 Emergency
                </div>
              )}
              <button className="mt-4 text-indigo-600 hover:text-indigo-700 text-sm font-semibold">
                {method.action} →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <ContactForm />
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Family Support Hours */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-linear-to-r from-indigo-600 to-rose-600 rounded-xl flex items-center justify-center text-white mr-3">
                  <Clock className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Family Support Hours
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Weekdays</span>
                  <span className="font-semibold text-indigo-700">
                    7am - 9pm
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-rose-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Weekends</span>
                  <span className="font-semibold text-rose-700">8am - 8pm</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Emergency</span>
                  <span className="font-semibold text-emerald-700">24/7</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                  <span>Extended hours for working families</span>
                </div>
              </div>
            </motion.div>

            {/* Family Support Team */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-linear-to-r from-indigo-600 to-rose-600 rounded-xl flex items-center justify-center text-white mr-3">
                  <Heart className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Support Team
                </h2>
              </div>

              <p className="text-gray-600 mb-4">
                Meet our family specialists ready to help your household
              </p>

              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-12 w-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-xs text-indigo-600 font-medium">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-white px-2 py-1 rounded-lg text-xs text-gray-600 border"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Family Community */}
            <motion.div
              className="bg-linear-to-br from-indigo-600 to-rose-600 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Join Our Family</h2>
              <p className="text-indigo-100 mb-4">
                Connect with other families and get exclusive tips for home care
              </p>

              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="bg-white/20 p-2 rounded-xl hover:bg-white/30 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 p-2 rounded-xl hover:bg-white/30 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 p-2 rounded-xl hover:bg-white/30 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

              <div className="bg-white/10 rounded-xl p-3 text-sm">
                <div className="flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  <span>10,000+ families served this year</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Family Promise Section */}
      <motion.div
        className="bg-linear-to-r from-indigo-50 to-rose-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Family Promise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Safe & Secure",
                description:
                  "Every professional is thoroughly vetted and trained in family safety",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Family First",
                description:
                  "We schedule around your family life and understand your priorities",
              },
              {
                icon: <CheckCircle2 className="h-8 w-8" />,
                title: "100% Guaranteed",
                description:
                  "If you're not happy, we'll make it right - no questions asked",
              },
            ].map((promise, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-linear-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {promise.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {promise.title}
                </h3>
                <p className="text-gray-600 text-sm">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
