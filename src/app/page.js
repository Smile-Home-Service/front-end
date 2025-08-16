import Header from "@/components/navbar/Navbar"
import HeroSection from "@/components/home/hero-section"
import ServiceCategories from "@/components/home/service-category"
import HowItWorks from "@/components/home/how-it-works"
import Testimonials from "@/components/home/testimonials"
import Stats from "@/components/home/stats"
import Footer from "@/components/footer/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <HowItWorks />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
