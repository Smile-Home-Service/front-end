import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, Star, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-rose-50 overflow-hidden">
      {/* Warm Background Elements */}
      <div className="absolute inset-0">
        {/* Soft background patterns */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-28">
          <div className="pt-10 px-4 sm:px-6 lg:px-8 lg:pt-16">
            <motion.main
              className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="sm:text-center lg:text-left">
                {/* Trust Badge */}
                <motion.div
                  className="inline-flex items-center bg-white rounded-full shadow-sm border border-gray-100 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-indigo-100 border-2 border-white rounded-full flex items-center justify-center"
                        >
                          <Heart className="w-3 h-3 text-rose-500" />
                        </div>
                      ))}
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      Trusted by 10,000+ Families
                    </span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
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
                  className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Reliable home services that{" "}
                  <span className="font-semibold text-rose-600">
                    care for your family
                  </span>{" "}
                  like our own. From cleaning to repairs, we make home
                  maintenance{" "}
                  <span className="text-indigo-600">
                    simple and stress-free
                  </span>
                  .
                </motion.p>

                {/* Key Benefits */}
                <motion.div
                  className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {[
                    {
                      icon: Shield,
                      text: "Verified & Safe",
                      desc: "Background-checked professionals",
                    },
                    {
                      icon: Clock,
                      text: "Flexible Timing",
                      desc: "Schedule around your family time",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {item.text}
                        </div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {/* Main CTA */}
                  <motion.button
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-2xl transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">Find Your Helper Today</span>
                    <Heart className="ml-2 h-5 w-5 relative" />
                  </motion.button>

                  {/* Secondary CTA */}
                  <motion.button
                    className="inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-gray-700 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Play className="w-5 h-5 mr-2 text-indigo-600" /> */}
                    See How It Works
                  </motion.button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No advance payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Free rescheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 customer support</span>
                  </div>
                </motion.div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>

      {/* Right Side - Family Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-96 lg:h-full">
          {/* Image Container with Decorative Frame */}
          <motion.div
            className="absolute inset-0 lg:left-10 lg:top-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              className="h-full w-full object-cover rounded-l-3xl lg:rounded-3xl shadow-2xl"
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Happy mother with child at clean home"
            />

            {/* Floating Trust Card */}
            <motion.div
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-200"
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Happy customer"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    "Life-saving help!"
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Add this to your global CSS for the blob animation
const globalStyles = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
`;
