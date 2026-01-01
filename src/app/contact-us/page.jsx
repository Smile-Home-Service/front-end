"use client";
import { motion } from "framer-motion";

import { Heart } from "lucide-react";
import { ContactForm } from "@/components/contact/contact.form";
import { ContactMethod } from "@/components/contact/contact.method";
import { FamilySupportHour } from "@/components/contact/family.support.hour";
import { FamilyCommunity } from "@/components/contact/family.community";
import { FaqSection } from "@/components/contact/faq.section";
// import { FamilySupportTeam } from "@/components/contact/family.support.team";

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
        <ContactMethod />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <ContactForm />
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Family Support Hours */}
            <FamilySupportHour />

            {/* Family Support Team */}
            {/* <FamilySupportTeam /> */}

            {/* Family Community */}
            <FamilyCommunity />
          </div>
        </div>
        <FaqSection />
      </div>
    </div>
  );
}
