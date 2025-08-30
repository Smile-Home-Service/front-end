"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Heart,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About <span className="font-extrabold">HomeServe</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover our journey, mission, and the passionate team dedicated to
            revolutionizing your home service experience with reliability and
            excellence.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white bg-indigo-800 rounded-lg shadow-lg hover:bg-indigo-900 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="px-6 py-3 text-lg font-medium text-indigo-900 bg-white rounded-lg shadow-lg hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              className="text-center p-6 bg-indigo-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600">10K+</div>
              <div className="mt-2 text-gray-600">Happy Customers</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-indigo-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600">500+</div>
              <div className="mt-2 text-gray-600">Skilled Professionals</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-indigo-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600">25+</div>
              <div className="mt-2 text-gray-600">Cities Served</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-indigo-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600">98%</div>
              <div className="mt-2 text-gray-600">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Building Trust Since 2015
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              HomeServe began with a simple vision: to transform the home
              services industry by making quality repairs and maintenance
              accessible, reliable, and completely stress-free. What started as
              a small team of dedicated professionals has grown into a trusted
              nationwide service.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we continue to innovate with technology that connects you
              with vetted experts, transparent pricing, and a satisfaction
              guarantee on every job—big or small.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 from 2,500+ reviews</span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-indigo-600" />
                <div className="ml-4">
                  <div className="font-bold">Industry Excellence Award</div>
                  <div className="text-sm text-gray-500">
                    2023 Best Home Services
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These principles guide everything we do and how we serve our
              customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To provide exceptional home services that are reliable,
                affordable, and delivered with the highest standards of quality
                and professionalism.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To become the most trusted home services platform worldwide,
                simplifying home maintenance and improving quality of life for
                everyone.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Our Promise
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We guarantee satisfaction with every service, backed by our 100%
                quality assurance and dedicated support team ready to help you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The passionate individuals driving our mission forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO & Founder",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Michael Chen",
              role: "Head of Operations",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Jessica Williams",
              role: "Customer Experience",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "David Rodriguez",
              role: "Technical Director",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="text-indigo-600">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 -mr-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 bg-purple-500/20 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Experience the HomeServe Difference
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto"
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
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-indigo-900 bg-white rounded-2xl shadow-lg hover:bg-gray-50 transition-all"
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
          <motion.p
            className="mt-6 text-indigo-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            No hidden fees • 100% satisfaction guarantee • 24/7 support
          </motion.p>
        </div>
      </div>
    </div>
  );
}
