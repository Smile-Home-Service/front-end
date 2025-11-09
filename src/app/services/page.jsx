"use client";
import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Clock,
  Home,
  Wrench,
  Sparkle,
  Truck,
  Gem,
  Users,
  Calendar,
  Heart,
  Filter,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Clock4,
  Baby,
  PawPrint,
} from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const services = [
    {
      id: 1,
      title: "Deep Home Cleaning",
      description:
        "Sparkling clean home with family-safe products. Perfect for busy families and pet owners.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "cleaning",
      rating: 4.9,
      reviews: 1245,
      price: 79,
      duration: "2-3 hours",
      professionals: 150,
      featured: true,
      familyFriendly: true,
      petFriendly: true,
      tags: ["Eco-friendly", "Child-safe", "Same Day"],
    },
    {
      id: 2,
      title: "Emergency Plumbing Help",
      description:
        "Quick fixes for leaks and clogs. We understand family emergencies can't wait!",
      image:
        "https://images.unsplash.com/photo-1632765859134-4c2827f6d5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "repair",
      rating: 4.8,
      reviews: 876,
      price: 99,
      duration: "1-2 hours",
      professionals: 95,
      featured: true,
      familyFriendly: true,
      emergency: true,
      tags: ["24/7", "Emergency", "Guaranteed"],
    },
    {
      id: 3,
      title: "Home Spa & Relaxation",
      description:
        "Pamper yourself at home with our certified beauty professionals. You deserve it!",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "beauty",
      rating: 4.9,
      reviews: 2310,
      price: 65,
      duration: "1-1.5 hours",
      professionals: 210,
      featured: true,
      familyFriendly: true,
      tags: ["Luxury", "Relaxing", "At Home"],
    },
    {
      id: 4,
      title: "Family Moving Service",
      description:
        "Stress-free moving with special care for your precious family items and memories.",
      image:
        "https://images.unsplash.com/photo-1541979667479-339a9c826894?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "moving",
      rating: 4.7,
      reviews: 543,
      price: 120,
      duration: "4-6 hours",
      professionals: 120,
      familyFriendly: true,
      tags: ["Packing", "Careful", "Family"],
    },
    {
      id: 5,
      title: "AC & Heating Care",
      description:
        "Keep your family comfortable year-round with our HVAC specialists.",
      image:
        "https://images.unsplash.com/photo-1611834909196-5f043931a464?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "repair",
      rating: 4.8,
      reviews: 765,
      price: 85,
      duration: "2-3 hours",
      professionals: 67,
      familyFriendly: true,
      tags: ["Comfort", "Maintenance", "Expert"],
    },
    {
      id: 6,
      title: "Carpet & Rug Cleaning",
      description:
        "Deep cleaning that's safe for kids and pets. Eliminates allergens and stains.",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "cleaning",
      rating: 4.6,
      reviews: 432,
      price: 60,
      duration: "1-2 hours",
      professionals: 88,
      familyFriendly: true,
      petFriendly: true,
      tags: ["Allergen-free", "Stain Removal", "Eco-safe"],
    },
    {
      id: 7,
      title: "Makeup & Special Occasion",
      description: "Look your best for family events, photos, or just because!",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "beauty",
      rating: 4.8,
      reviews: 987,
      price: 55,
      duration: "1-2 hours",
      professionals: 135,
      tags: ["Special Events", "Professional", "At Home"],
    },
    {
      id: 8,
      title: "Electrical Safety Check",
      description:
        "Peace of mind for your family's safety with our certified electricians.",
      image:
        "https://images.unsplash.com/photo-1580015913491-8f6de2d12191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "repair",
      rating: 4.7,
      reviews: 654,
      price: 89,
      duration: "2-4 hours",
      professionals: 78,
      familyFriendly: true,
      tags: ["Safety", "Certified", "Thorough"],
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Services",
      icon: <Home size={20} />,
      count: services.length,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "cleaning",
      name: "Home Cleaning",
      icon: <Sparkle size={20} />,
      count: services.filter((s) => s.category === "cleaning").length,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "repair",
      name: "Repairs & Fixes",
      icon: <Wrench size={20} />,
      count: services.filter((s) => s.category === "repair").length,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "beauty",
      name: "Beauty & Care",
      icon: <Gem size={20} />,
      count: services.filter((s) => s.category === "beauty").length,
      color: "from-rose-500 to-pink-500",
    },
    {
      id: "moving",
      name: "Moving Help",
      icon: <Truck size={20} />,
      count: services.filter((s) => s.category === "moving").length,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const familyBenefits = [
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Family-First Approach",
      description:
        "Services designed with your family's comfort and safety in mind",
    },
    {
      icon: <PawPrint className="h-6 w-6" />,
      title: "Pet-Friendly",
      description:
        "Safe for your furry family members with pet-conscious professionals",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Trusted & Verified",
      description:
        "Every professional is background-checked and family-approved",
    },
    {
      icon: <Clock4 className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Book around school runs, naps, and family time",
    },
  ];

  // Filter services
  const filteredServices = services
    .filter(
      (service) =>
        (activeCategory === "all" || service.category === activeCategory) &&
        (searchQuery === "" ||
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        service.price >= priceRange[0] &&
        service.price <= priceRange[1] &&
        service.rating >= ratingFilter
    )
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-indigo-50">
      <Head>
        <title>Family Services | HomeServe</title>
        <meta
          name="description"
          content="Family-friendly home services that care for your home like we care for ours"
        />
      </Head>

      {/* Warm Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 bg-rose-100 rounded-full text-rose-700 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Families
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Services for Your
              <span className="block bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">
                Family Haven
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Discover home services that understand family life. From emergency
              fixes to much-needed pampering, we're here to make your home a
              happier place.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide"
        >
          <div className="flex space-x-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-4 rounded-2xl whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:shadow-md border border-gray-100"
                }`}
              >
                <span className="mr-3">{category.icon}</span>
                {category.name}
                <span
                  className={`ml-3 px-2 py-1 rounded-full text-xs ${
                    activeCategory === category.id
                      ? "bg-white/20"
                      : "bg-gray-100"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center justify-center w-full bg-white py-3 px-4 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters & Search
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                    placeholder="What do you need help with?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Budget Range
                </h3>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between mt-3">
                    <span className="text-sm font-medium text-gray-700">
                      ${priceRange[0]}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      ${priceRange[1]}+
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Customer Rating
                </h3>
                <div className="space-y-2">
                  {[4.5, 4, 3, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setRatingFilter(rating)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        ratingFilter === rating
                          ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium">
                          {rating === 0 ? "All Ratings" : `${rating}+ Stars`}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Family Features */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Family Features
                </h3>
                <div className="space-y-2">
                  <button className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50">
                    <Baby className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium">
                      Child-Safe Services
                    </span>
                  </button>
                  <button className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50">
                    <PawPrint className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium">Pet-Friendly</span>
                  </button>
                  <button className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50">
                    <Clock4 className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium">Flexible Timing</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Family Benefits */}
            <div className="mt-6 bg-gradient-to-br from-indigo-50 to-rose-50 rounded-2xl p-6 border border-indigo-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
                Why Families Love Us
              </h2>
              <div className="space-y-4">
                {familyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-xl p-2 text-indigo-600 shadow-sm">
                      {benefit.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <p className="text-gray-600">
                  Found{" "}
                  <span className="font-semibold text-indigo-600">
                    {filteredServices.length}
                  </span>{" "}
                  family-friendly services
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <span className="text-sm font-medium text-gray-700">
                  Sort by:
                </span>
                <select
                  className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-xl bg-white/80 backdrop-blur-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Best Value</option>
                  <option value="price-high">Premium Services</option>
                </select>
              </div>
            </div>

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                <AnimatePresence>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 ${
                        service.featured
                          ? "ring-2 ring-indigo-500 ring-opacity-20"
                          : ""
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 flex space-x-2">
                          {service.featured && (
                            <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                          {service.familyFriendly && (
                            <span className="bg-rose-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                              <Baby className="w-3 h-3 mr-1" />
                              Family
                            </span>
                          )}
                          {service.petFriendly && (
                            <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                              <PawPrint className="w-3 h-3 mr-1" />
                              Pet-Friendly
                            </span>
                          )}
                        </div>
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm font-semibold">
                              {service.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <div className="text-2xl font-bold text-indigo-600">
                            ${service.price}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {service.professionals}+ Pros
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-900 font-medium">
                              {service.reviews}
                            </span>
                            <span className="ml-1">reviews</span>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex-1 bg-gradient-to-r from-indigo-600 to-rose-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
                            Book Now
                          </button>
                          <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                            <Calendar className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No services found
                </h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any services matching your criteria. Try
                  adjusting your search.
                </p>
                <button
                  className="bg-indigo-600 text-white py-3 px-8 rounded-xl hover:bg-indigo-700 transition-colors font-semibold"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                    setPriceRange([0, 500]);
                    setRatingFilter(0);
                  }}
                >
                  Show All Services
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                {/* Mobile filter content would go here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
