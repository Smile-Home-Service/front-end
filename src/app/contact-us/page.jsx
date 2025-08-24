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
    alert("Thank you for your message! We will get back to you soon.");
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
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "support@homeserve.com",
      description: "Send us an email anytime",
      action: "Send Email",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Service Street, City, State 12345",
      description: "Come say hello at our office",
      action: "Get Directions",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant help from our team",
      action: "Start Chat",
    },
  ];

  const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 24 hours. For urgent matters, please call our customer service line for immediate assistance.",
    },
    {
      question: "What are your customer service hours?",
      answer:
        "Our customer service team is available Monday through Friday from 8:00 AM to 8:00 PM EST, and on weekends from 9:00 AM to 5:00 PM EST.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we offer emergency services for urgent home issues. Please call our emergency hotline at +1 (555) 911-HOME for immediate assistance outside regular business hours.",
    },
    {
      question: "How can I become a service professional?",
      answer:
        "We're always looking for skilled professionals to join our team. Please visit our Careers page or email careers@homeserve.com with your resume and details about your expertise.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve most metropolitan areas across the United States and are expanding to new locations regularly. Enter your zip code on our homepage to check availability in your area.",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Customer Support Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Michael Chen",
      role: "Service Coordinator",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Emma Rodriguez",
      role: "Quality Assurance Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us | HomeServe</title>
        <meta
          name="description"
          content="Get in touch with HomeServe for all your home service needs"
        />
      </Head>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.h1
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're here to help with all your home service needs. Get in touch
              with our team through any of the channels below.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center">
                <div className="bg-indigo-100 rounded-full p-3 text-indigo-600">
                  {method.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {method.title}
              </h3>
              <p className="mt-2 text-gray-900 font-medium">{method.details}</p>
              <p className="mt-1 text-sm text-gray-500">{method.description}</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                {method.action}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
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
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
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
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div className="mt-6">
                  <motion.button
                    type="submit"
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="mt-12 bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 text-indigo-600 mr-2" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full text-left font-medium text-gray-900 hover:text-indigo-600"
                    >
                      <span>{faq.question}</span>
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
                        className="mt-2 text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Office Hours */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                Office Hours
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Emergency services are available 24/7. Call our hotline for
                  immediate assistance.
                </p>
              </div>
            </motion.div>

            {/* Team Members */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-600 mb-4">
                Meet some of our dedicated customer service team members who are
                ready to assist you.
              </p>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-600 mb-4">
                Follow us on social media for updates, tips, and special offers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        className="bg-gray-100 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Visit Our Office
            </h2>
            <p className="mt-2 text-gray-600">We'd love to see you in person</p>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 w-full bg-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-indigo-600 mx-auto" />
                <p className="mt-2 text-indigo-600 font-medium">
                  Interactive Map Would Appear Here
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  123 Service Street, City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
