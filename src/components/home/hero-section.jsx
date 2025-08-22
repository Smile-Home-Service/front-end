import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white" />
        <svg
          className="absolute top-0 right-0 mt-[-50px] w-72 h-72 text-indigo-100"
          fill="none"
          viewBox="0 0 404 404"
        >
          <circle cx="202" cy="202" r="202" fill="currentColor" />
        </svg>
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
                <motion.h1
                  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="block">Home Services,</span>
                  <span className="block text-indigo-600">On Demand</span>
                </motion.h1>
                <motion.p
                  className="mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Book trusted professionals for all your home service needs.
                  Quality guaranteed, satisfaction ensured.
                </motion.p>

                {/* Buttons */}
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 md:py-4 md:px-10 text-lg font-medium rounded-lg text-white bg-indigo-600 shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-transform transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.a>
                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-3 md:py-4 md:px-10 text-lg font-medium rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-transform transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    How it works
                  </motion.a>
                </div>

                {/* Feature List */}
                <motion.div
                  className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {[
                    "Trusted Professionals",
                    "100% Satisfaction",
                    "Fast Booking",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-600 font-medium">{text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Happy family at home"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
