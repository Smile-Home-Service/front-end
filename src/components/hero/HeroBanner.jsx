import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroBanner = ({ slogan, title, subtitle, description }) => {
  return (
    <div className="relative bg-linear-to-r from-indigo-600 to-rose-600 overflow-hidden">
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
            {slogan}
          </motion.div>

          <motion.h1
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
            <span className="block bg-linear-to-r from-white to-rose-100 bg-clip-text text-transparent mt-2">
              {subtitle}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
