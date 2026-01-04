"use client";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Shield,
  CheckCircle,
  Clock,
  Star,
  Send,
  Heart,
} from "lucide-react";
import Newsletter from "../newsletter/Newsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Home Cleaning", href: "/services/cleaning" },
        { name: "Plumbing & Repair", href: "/services/plumbing" },
        { name: "Beauty & Spa", href: "/services/beauty" },
        { name: "Moving Help", href: "/services/moving" },
        { name: "Electrical", href: "/services/electrical" },
        { name: "Gardening", href: "/services/gardening" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Help Center", href: "/help" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Service Areas", href: "/areas" },
      ],
    },
  ];

  const familyFeatures = [
    { icon: <Shield className="w-4 h-4" />, text: "Verified & Safe" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Quality Guaranteed" },
    { icon: <Clock className="w-4 h-4" />, text: "On-Time Service" },
    { icon: <Star className="w-4 h-4" />, text: "Family Rated" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-indigo-50/30 border-t border-gray-200/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-rose-600 p-2 rounded-2xl">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <div className="ml-3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                  HomeServe
                </h2>
                <p className="text-sm text-gray-600">Family Care Services</p>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Making home services simple, reliable, and family-friendly.
              Trusted by thousands of families for a happier, well-maintained
              home.
            </motion.p>

            {/* Family Features */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {familyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-gray-700"
                >
                  <div className="text-indigo-600 mr-2">{feature.icon}</div>
                  {feature.text}
                </div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 text-indigo-600 mr-3" />
                <span>+1 (555) 123-FAMILY</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-4 h-4 text-indigo-600 mr-3" />
                <span>family@homeserve.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 text-indigo-600 mr-3" />
                <span>123 Family Street, Care City</span>
              </div>
            </motion.div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-8">
            {/* Newsletter */}
            <Newsletter />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Our Family
              </h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Facebook className="w-5 h-5" />,
                    name: "Facebook",
                    href: "#",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    name: "Instagram",
                    href: "#",
                  },
                  {
                    icon: <Youtube className="w-5 h-5" />,
                    name: "YouTube",
                    href: "#",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-3 bg-white rounded-2xl text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 shadow-sm hover:shadow-md transition-all border border-gray-200/50"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* App Download CTA */}
            <motion.div
              className="bg-linear-to-r from-indigo-600 to-rose-600 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-2">Get Our Family App</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Book services, track appointments, and manage your home care all
                in one place.
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-white text-indigo-600 py-2 px-4 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
                  App Store
                </button>
                <button className="flex-1 bg-white text-indigo-600 py-2 px-4 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
                  Google Play
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200/50 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-indigo-600 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              className="text-sm text-gray-600 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} HomeServe Family Care. All rights reserved.
              <Heart className="w-4 h-4 text-rose-500 mx-2" />
              Making homes happier.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              className="flex items-center space-x-4 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span>✓ Family Safe</span>
              <span>✓ Background Checked</span>
              <span>✓ Insured</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
