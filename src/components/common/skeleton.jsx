"use client";

import { motion } from "framer-motion";

export const Skeleton = ({ className }) => {
  return (
    <motion.div
      className={`bg-gray-200 rounded-md overflow-hidden relative ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
    </motion.div>
  );
};

export const FaqSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-xl p-4 border border-gray-100"
        >
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
