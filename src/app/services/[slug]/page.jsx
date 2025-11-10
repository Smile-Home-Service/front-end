"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Shield,
  CheckCircle,
  Calendar,
  Sparkles,
  Baby,
  PawPrint,
  Clock4,
  Award,
  ChevronLeft,
  Share2,
  Bookmark,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ServiceDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const service = {
    id: 1,
    title: "Deep Home Cleaning",
    category: "Cleaning",
    rating: 4.9,
    reviews: 1247,
    price: 79,
    duration: "2-3 hours",
    professionals: 150,
    familyFriendly: true,
    petFriendly: true,
    emergency: false,
    featured: true,
    description:
      "Thorough cleaning of your entire home using family-safe, eco-friendly products. Perfect for busy families who want a sparkling clean home without the hassle.",
    longDescription:
      "Our deep home cleaning service is designed with families in mind. We use only child-safe and pet-friendly cleaning products that are tough on dirt but gentle on your loved ones. Our professionals are trained to work around your family's schedule and pay special attention to high-touch areas and spaces where children play.",

    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    features: [
      {
        icon: <Baby className="w-5 h-5" />,
        text: "Child-safe cleaning products",
        description: "Non-toxic and hypoallergenic",
      },
      {
        icon: <PawPrint className="w-5 h-5" />,
        text: "Pet-friendly approach",
        description: "Safe for your furry family members",
      },
      {
        icon: <Sparkles className="w-5 h-5" />,
        text: "Eco-friendly solutions",
        description: "Better for your home and environment",
      },
      {
        icon: <Clock4 className="w-5 h-5" />,
        text: "Flexible scheduling",
        description: "Around school and nap times",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        text: "Background-checked pros",
        description: "Trusted by thousands of families",
      },
      {
        icon: <Award className="w-5 h-5" />,
        text: "Satisfaction guaranteed",
        description: "We'll make it right if you're not happy",
      },
    ],

    included: [
      "Dusting all surfaces",
      "Vacuuming carpets & rugs",
      "Mopping hard floors",
      "Bathroom sanitization",
      "Kitchen deep clean",
      "Window cleaning (interior)",
      "Trash removal",
      "Surface disinfection",
    ],

    notIncluded: [
      "Wall washing",
      "Carpet shampooing",
      "Oven cleaning",
      "Fridge cleaning",
      "Laundry services",
    ],

    professionals: [
      {
        id: 1,
        name: "Sarah Johnson",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 4.9,
        reviews: 324,
        specialties: ["Family Homes", "Eco Cleaning", "Quick Service"],
        years: 5,
        verified: true,
      },
      {
        id: 2,
        name: "Mike Chen",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 4.8,
        reviews: 287,
        specialties: ["Deep Cleaning", "Allergy Care", "Pet Homes"],
        years: 3,
        verified: true,
      },
    ],

    reviews: [
      {
        id: 1,
        user: "Emily R.",
        rating: 5,
        date: "2 days ago",
        comment:
          "Amazing service! The cleaner was so careful with my children's toys and used products that didn't trigger my son's allergies. Our home has never been cleaner!",
        verified: true,
      },
      {
        id: 2,
        user: "David M.",
        rating: 5,
        date: "1 week ago",
        comment:
          "Perfect for our busy family. They worked around our schedule and left the house spotless. The pet-friendly approach is a huge plus for us!",
        verified: true,
      },
      {
        id: 3,
        user: "Lisa T.",
        rating: 4,
        date: "2 weeks ago",
        comment:
          "Very thorough cleaning. They paid special attention to the kitchen and bathrooms. Would definitely book again!",
        verified: true,
      },
    ],

    faqs: [
      {
        question: "What cleaning products do you use?",
        answer:
          "We use only family-safe, eco-friendly cleaning products that are non-toxic, hypoallergenic, and safe for children and pets. All products are thoroughly tested and approved by our safety team.",
      },
      {
        question: "Can I schedule around my children's nap time?",
        answer:
          "Absolutely! We understand family schedules can be hectic. Our professionals are trained to work quietly and can schedule around nap times, school runs, and other family activities.",
      },
      {
        question: "Do I need to provide any cleaning supplies?",
        answer:
          "No, our professionals bring all necessary equipment and supplies. We use our own family-safe products and professional-grade equipment to ensure the best results.",
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer:
          "We offer a 100% satisfaction guarantee. If you're not happy with any aspect of the service, let us know within 24 hours and we'll come back to make it right at no additional cost.",
      },
    ],
  };

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const dates = [
    { date: "2024-01-15", display: "Today" },
    { date: "2024-01-16", display: "Tomorrow" },
    { date: "2024-01-17", display: "Jan 17" },
    { date: "2024-01-18", display: "Jan 18" },
    { date: "2024-01-19", display: "Jan 19" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative h-96">
                <img
                  src={service.images[selectedImage]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {service.featured && (
                    <span className="bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  {service.familyFriendly && (
                    <span className="bg-rose-500 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
                      <Baby className="w-3 h-3 mr-1" />
                      Family
                    </span>
                  )}
                  {service.petFriendly && (
                    <span className="bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
                      <PawPrint className="w-3 h-3 mr-1" />
                      Pet-Friendly
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {service.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-indigo-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: "overview", name: "Overview" },
                    { id: "features", name: "What's Included" },
                    { id: "professionals", name: "Our Pros" },
                    { id: "reviews", name: `Reviews (${service.reviews})` },
                    { id: "faq", name: "FAQ" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                        activeTab === tab.id
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-gray-900">
                        Service Overview
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {feature.text}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          What's Included
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.included.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Not Included
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.notIncluded.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-5 h-5 text-gray-400">•</div>
                              <span className="text-gray-500">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "professionals" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        Available Professionals
                      </h3>
                      <div className="space-y-4">
                        {service.professionals.map((pro) => (
                          <div
                            key={pro.id}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                          >
                            <div className="flex items-start space-x-4">
                              <img
                                src={pro.image}
                                alt={pro.name}
                                className="w-16 h-16 rounded-xl object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-gray-900">
                                    {pro.name}
                                  </h4>
                                  {pro.verified && (
                                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                                      Verified
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center mt-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="ml-1 font-medium text-gray-900">
                                    {pro.rating}
                                  </span>
                                  <span className="mx-2 text-gray-400">•</span>
                                  <span className="text-gray-600">
                                    {pro.reviews} reviews
                                  </span>
                                  <span className="mx-2 text-gray-400">•</span>
                                  <span className="text-gray-600">
                                    {pro.years} years experience
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {pro.specialties.map((specialty, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border"
                                    >
                                      {specialty}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "reviews" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Customer Reviews
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="ml-1 font-bold text-gray-900">
                              {service.rating}
                            </span>
                          </div>
                          <span className="text-gray-600">
                            ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {service.reviews.map((review) => (
                          <div
                            key={review.id}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center text-white font-semibold">
                                  {review.user.charAt(0)}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {review.user}
                                  </h4>
                                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <span>{review.date}</span>
                                    {review.verified && (
                                      <>
                                        <span>•</span>
                                        <span className="text-green-600">
                                          Verified
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "faq" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        Frequently Asked Questions
                      </h3>
                      {service.faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h1>
                    <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{service.rating}</span>
                        <span className="mx-1">•</span>
                        <span>{parseInt(service.reviews)} reviews</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-indigo-600">
                    ${service.price}
                  </div>
                  <p className="text-gray-600 text-sm">One-time service fee</p>
                </div>

                {/* Booking Form */}
                <div className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((date) => (
                        <button
                          key={date.date}
                          onClick={() => setSelectedDate(date.date)}
                          className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                            selectedDate === date.date
                              ? "bg-indigo-500 text-white border-indigo-500"
                              : "bg-white text-gray-700 border-gray-300 hover:border-indigo-300"
                          }`}
                        >
                          {date.display}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                            selectedTime === time
                              ? "bg-indigo-500 text-white border-indigo-500"
                              : "bg-white text-gray-700 border-gray-300 hover:border-indigo-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      className="w-full flex justify-center items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book This Service
                    </motion.button>

                    <button className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Ask a Question
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500 mr-2" />
                      Background-checked professionals
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Satisfaction guaranteed
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-green-500 mr-2" />
                      On-time service or we pay you $25
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="mt-6 bg-gradient-to-r from-indigo-50 to-rose-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our family support team is here to help you find the perfect
                  service.
                </p>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AnimatePresence = ({ children, mode }) => {
  return <div>{children}</div>;
};
