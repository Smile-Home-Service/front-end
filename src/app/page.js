"use client";

import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/service.home";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import LocationsSection from "@/components/home/location.home";

export default function HomeServiceApp() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <Testimonials />
      <LocationsSection />
    </div>
  );
}
