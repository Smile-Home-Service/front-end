import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Clock,
  Star,
  Heart,
  Play,
  Users,
} from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-rose-50 min-h-screen overflow-hidden">
      {/* Warm Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-8">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-100 max-w-max"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-medium text-gray-700">
                  Trusted by 10,000+ Families
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block font-light text-gray-700">
                  Your Home's
                </span>
                <span className="block bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent mt-2">
                  Happy Helpers
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Reliable home services that{" "}
                <span className="font-semibold text-rose-600">
                  care for your family
                </span>{" "}
                like our own. From cleaning to repairs, we make home maintenance{" "}
                <span className="text-indigo-600 font-medium">
                  simple and stress-free
                </span>
                .
              </motion.p>
            </div>

            {/* Key Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                {
                  icon: Shield,
                  text: "Verified & Safe",
                  desc: "Background-checked professionals",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Clock,
                  text: "Flexible Timing",
                  desc: "Schedule around your family time",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: CheckCircle,
                  text: "Quality Guaranteed",
                  desc: "Satisfaction or we'll make it right",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  icon: Heart,
                  text: "Family First",
                  desc: "Services designed for busy families",
                  color: "from-rose-500 to-pink-500",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-md`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.text}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { text: "No advance payment" },
                { text: "Free rescheduling" },
                { text: "24/7 customer support" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Family Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Happy mother with child at clean home"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Trust Card */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full object-cover border-2 border-rose-200"
                      src="https://avatar.iran.liara.run/public"
                      alt="Happy customer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="flex items-center text-amber-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      "Life-saving service for our busy family!"
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="flex justify-center text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    2,000+ Reviews
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
