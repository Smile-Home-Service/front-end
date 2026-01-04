"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Clock,
  Users,
  Calendar,
  Filter,
  X,
  ChevronDown,
} from "lucide-react";

import { useGetServicesQuery } from "@/lib/api/service.api";
import HeroBanner from "@/components/hero/HeroBanner";
import { ServiceSkeleton } from "@/components/common/skeleton";

export default function ServicesPage() {
  const [sortOption, setSortOption] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { data, isLoading, isSuccess } = useGetServicesQuery({
    page: 1,
  });

  const services = isSuccess ? data.items : [];

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-indigo-50">
      {/* Warm Header */}
      <HeroBanner
        slogan="Family-Friendly Services"
        title="Home Services"
        subtitle="Designed for Families"
        description="Discover home services that understand family life. From emergency fixes to much-needed pampering, we're here to make your home a happier place."
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                    {services?.length}
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
            {isLoading ? (
              <ServiceSkeleton />
            ) : services.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                <AnimatePresence>
                  {services.map((service, index) => (
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
                          src={service.featured_image}
                          alt={service.service_name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 flex space-x-2">
                          {service.featured && (
                            <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm font-semibold">
                              {service?.rating ?? "2.5"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {service?.service_name}
                          </h3>
                          <div className="text-2xl font-bold text-indigo-600">
                            ${service?.base_price}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service?.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service?.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {service?.professionals ?? "1"}+ Pros
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-900 font-medium">
                              {service?.reviews ?? "0"}
                            </span>
                            <span className="ml-1">reviews</span>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex-1 bg-linear-to-r from-indigo-600 to-rose-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
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
