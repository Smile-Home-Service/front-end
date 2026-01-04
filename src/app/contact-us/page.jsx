"use client";

import { ContactForm } from "@/components/contact/contact.form";
import { ContactMethod } from "@/components/contact/contact.method";
import { FamilySupportHour } from "@/components/contact/family.support.hour";
import { FamilyCommunity } from "@/components/contact/family.community";
import { FaqSection } from "@/components/contact/faq.section";

import HeroBanner from "@/components/hero/HeroBanner";
// import { FamilySupportTeam } from "@/components/contact/family.support.team";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-indigo-50">
      {/* Header */}
      <HeroBanner
        slogan="Your Support Team"
        title="We're Here for"
        subtitle="Your Family"
        description="From emergency fixes to routine maintenance, our family-friendly team is ready to help. We understand that your home is where your heart is - and we treat it that way."
      />

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
