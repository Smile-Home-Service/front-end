"use client";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  MailIcon,
  HelpCircle,
  Heart,
  Sparkles,
  Baby,
  PawPrint,
  Home,
  Shield,
  CheckCircle2,
} from "lucide-react";

export default function ContactUsPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(
      "Thank you for your message! Our family support team will get back to you soon."
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Family Support Line",
      details: "+1 (555) 123-FAMILY",
      description: "Mon-Fri from 7am to 9pm",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500",
      emergency: true,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Our Team",
      details: "family@homeserve.com",
      description: "We reply within 2 hours",
      action: "Send Email",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Instant Chat",
      details: "Available 24/7",
      description: "Get help while managing kids",
      action: "Start Chat",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Areas",
      details: "50+ Cities Covered",
      description: "Growing to serve more families",
      action: "Check Availability",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const faqItems = [
    {
      question: "How quickly can you help with family emergencies?",
      answer:
        "We prioritize family emergencies and aim to respond within 30 minutes. For urgent issues like plumbing leaks or electrical problems, we have emergency teams available 24/7 to keep your family safe and comfortable.",
    },
    {
      question: "Are your services safe for children and pets?",
      answer:
        "Absolutely! All our professionals use child-safe and pet-friendly products. We conduct thorough background checks and provide special training for working in family homes. Your family's safety is our top priority.",
    },
    {
      question: "Can I schedule around my children's activities?",
      answer:
        "Yes! We understand family schedules can be hectic. Our flexible scheduling allows you to book services around school runs, naptimes, and extracurricular activities. Evening and weekend appointments are available.",
    },
    {
      question: "What if I need to reschedule last minute?",
      answer:
        "No worries! We offer free rescheduling for family emergencies or unexpected events. Just give us a call or message us through the app - we know family life can be unpredictable!",
    },
    {
      question: "Do you offer senior or family discounts?",
      answer:
        "We offer special pricing for seniors, military families, and households with multiple children. We also have bundle packages for regular home maintenance that help families save throughout the year.",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Family Support Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      specialties: ["Child Safety", "Flexible Scheduling"],
    },
    {
      name: "Michael Chen",
      role: "Service Coordinator",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      specialties: ["Emergency Response", "Pet-Friendly Services"],
    },
    {
      name: "Emma Rodriguez",
      role: "Family Experience Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      specialties: ["Senior Care", "Family Discounts"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-indigo-50">
      <Head>
        <title>Contact Our Family Team | HomeServe</title>
        <meta
          name="description"
          content="Get in touch with HomeServe's family support team for all your home service needs"
        />
      </Head>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-rose-600 overflow-hidden">
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
              <span className="block bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent mt-2">
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
                  className={`bg-gradient-to-r ${method.color} rounded-2xl p-3 text-white shadow-lg`}
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
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white mr-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">We'll get back to you quickly</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                        placeholder="Family name or your name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                        placeholder="your.family@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    How Can We Help Your Family?
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                    placeholder="e.g., Emergency plumbing, regular cleaning, etc."
                    required
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                    placeholder="Please include any family considerations like pets, children's schedules, or special needs..."
                    required
                  />
                </div>

                {/* Family Considerations */}
                <div className="mt-6 bg-gradient-to-r from-indigo-50 to-rose-50 rounded-xl p-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <Sparkles className="w-4 h-4 text-indigo-600 mr-2" />
                    <span className="font-medium">
                      Family-Friendly Service:
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Baby className="w-3 h-3 mr-1 text-rose-500" />
                      Child-safe products
                    </div>
                    <div className="flex items-center">
                      <PawPrint className="w-3 h-3 mr-1 text-rose-500" />
                      Pet-friendly pros
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-rose-500" />
                      Flexible scheduling
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-3 h-3 mr-1 text-rose-500" />
                      Background checked
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <motion.button
                    type="submit"
                    className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 transition-all"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send to Family Support Team
                    <Send className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white mr-4">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Family Questions Answered
                  </h2>
                  <p className="text-gray-600">
                    Common questions from families like yours
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full text-left font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      <span className="text-lg">{faq.question}</span>
                      {activeFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-indigo-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-gray-600 leading-relaxed border-t border-gray-200 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

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
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-xl flex items-center justify-center text-white mr-3">
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
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-xl flex items-center justify-center text-white mr-3">
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
                      className="h-12 w-12 rounded-xl object-cover flex-shrink-0"
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
              className="bg-gradient-to-br from-indigo-600 to-rose-600 rounded-2xl p-6 text-white"
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
        className="bg-gradient-to-r from-indigo-50 to-rose-50 py-16"
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
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
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
