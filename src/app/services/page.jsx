"use client";
import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Clock,
  Shield,
  CheckCircle,
  Home,
  Wrench,
  Sparkle,
  Truck,
  Gem,
  Users,
  Calendar,
  Award,
} from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [ratingFilter, setRatingFilter] = useState(0);

  const services = [
    {
      id: 1,
      title: "Deep Home Cleaning",
      description:
        "Thorough cleaning of your entire home including dusting, vacuuming, mopping, and bathroom sanitization",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "cleaning",
      rating: 4.9,
      reviews: 1245,
      price: 79,
      duration: "2-3 hours",
      professionals: 150,
      featured: true,
    },
    {
      id: 2,
      title: "Emergency Plumbing",
      description:
        "Fix leaks, clogs, and installation services with our certified plumbers",
      image:
        "https://images.unsplash.com/photo-1632765859134-4c2827f6d5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "repair",
      rating: 4.8,
      reviews: 876,
      price: 99,
      duration: "1-2 hours",
      professionals: 95,
      featured: true,
    },
    {
      id: 3,
      title: "Electrical Wiring",
      description:
        "Wiring, fixtures, and electrical repairs by certified electricians",
      image:
        "https://images.unsplash.com/photo-1580015913491-8f6de2d12191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "repair",
      rating: 4.7,
      reviews: 654,
      price: 89,
      duration: "2-4 hours",
      professionals: 78,
    },
    {
      id: 4,
      title: "Luxury Spa & Massage",
      description: "At-home salon and spa services for ultimate relaxation",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "beauty",
      rating: 4.9,
      reviews: 2310,
      price: 65,
      duration: "1-1.5 hours",
      professionals: 210,
      featured: true,
    },
    {
      id: 5,
      title: "Full House Moving",
      description:
        "Professional movers for your relocation needs with packing and unpacking",
      image:
        "https://images.unsplash.com/photo-1541979667479-339a9c826894?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "moving",
      rating: 4.7,
      reviews: 543,
      price: 120,
      duration: "4-6 hours",
      professionals: 120,
    },
    {
      id: 6,
      title: "AC Installation & Repair",
      description:
        "AC installation, maintenance and repair by HVAC specialists",
      image:
        "https://images.unsplash.com/photo-1611834909196-5f043931a464?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "repair",
      rating: 4.8,
      reviews: 765,
      price: 85,
      duration: "2-3 hours",
      professionals: 67,
    },
    {
      id: 7,
      title: "Carpet Cleaning",
      description: "Deep steam cleaning for your carpets and rugs",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "cleaning",
      rating: 4.6,
      reviews: 432,
      price: 60,
      duration: "1-2 hours",
      professionals: 88,
    },
    {
      id: 8,
      title: "Makeup & Styling",
      description:
        "Professional makeup artists and stylists for special occasions",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "beauty",
      rating: 4.8,
      reviews: 987,
      price: 55,
      duration: "1-2 hours",
      professionals: 135,
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Services",
      icon: <Home size={20} />,
      count: services.length,
    },
    {
      id: "cleaning",
      name: "Cleaning",
      icon: <Sparkle size={20} />,
      count: services.filter((s) => s.category === "cleaning").length,
    },
    {
      id: "repair",
      name: "Repairs",
      icon: <Wrench size={20} />,
      count: services.filter((s) => s.category === "repair").length,
    },
    {
      id: "beauty",
      name: "Beauty",
      icon: <Gem size={20} />,
      count: services.filter((s) => s.category === "beauty").length,
    },
    {
      id: "moving",
      name: "Moving",
      icon: <Truck size={20} />,
      count: services.filter((s) => s.category === "moving").length,
    },
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Professionals",
      description: "All service providers are background-checked and certified",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Guarantee",
      description: "We ensure satisfaction with our 100% quality guarantee",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Service",
      description: "Our professionals arrive on schedule every time",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Easy Booking",
      description: "Book, manage, and pay for services all in one place",
    },
  ];

  // Filter services based on active filters
  const filteredServices = services
    .filter(
      (service) =>
        (activeCategory === "all" || service.category === activeCategory) &&
        (searchQuery === "" ||
          service.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        service.price >= priceRange[0] &&
        service.price <= priceRange[1] &&
        service.rating >= ratingFilter
    )
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews; // Default to popularity
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services | HomeServe</title>
        <meta
          name="description"
          content="Browse all home services offered by HomeServe"
        />
      </Head>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover a wide range of professional home services tailored to
              your needs. All services are performed by verified professionals
              with quality guaranteed.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Filters
              </h2>

              {/* Search */}
              <div className="mb-6">
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search Services
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === category.id
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </div>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Price Range
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">
                      ${priceRange[0]}
                    </span>
                    <span className="text-sm text-gray-500">
                      ${priceRange[1]}+
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </h3>
                <div className="space-y-2">
                  {[4.5, 4, 3, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setRatingFilter(rating)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-md ${
                        ratingFilter === rating
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-700 hover:bg-gray-100"
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
                            } ${
                              rating % 1 !== 0 && i === Math.floor(rating)
                                ? "text-yellow-400 fill-current"
                                : ""
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm">
                          {rating === 0 ? "Any rating" : `${rating}+`}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Apply Filters
              </button>
            </div>

            {/* Benefits Section */}
            <div className="mt-6 bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-2 text-indigo-600">
                      {benefit.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Listing */}
          <div className="lg:w-3/4">
            {/* Sort and Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing{" "}
                <span className="font-semibold">{filteredServices.length}</span>{" "}
                services
              </p>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">
                  Sort by:
                </span>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="popularity">Popularity</option>
                    <option value="rating">Highest Rating</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                <AnimatePresence>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`bg-white rounded-lg shadow overflow-hidden ${
                        service.featured ? "ring-2 ring-indigo-500" : ""
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                        {service.featured && (
                          <div className="absolute top-4 left-4 bg-indigo-500 text-white text-xs font-medium px-2 py-1 rounded">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <div className="text-2xl font-bold text-indigo-600">
                            ${service.price}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          {service.description}
                        </p>

                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium text-gray-900">
                            {service.rating}
                          </span>
                          <span className="mx-1">•</span>
                          <span>{service.reviews} reviews</span>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-400 mr-1" />
                            <span>{service.professionals}+ Pros</span>
                          </div>
                        </div>

                        <div className="mt-6 flex space-x-3">
                          <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                            Book Now
                          </button>
                          <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                            <Calendar className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No services found
                </h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your search or filter criteria to find what
                  you're looking for.
                </p>
                <button
                  className="mt-4 text-indigo-600 hover:text-indigo-700"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                    setPriceRange([0, 500]);
                    setRatingFilter(0);
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
