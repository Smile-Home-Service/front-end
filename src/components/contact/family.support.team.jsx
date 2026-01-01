import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { teamMembers } from "@/utils/data/contact.data";

export const FamilySupportTeam = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-linear-to-r from-indigo-600 to-rose-600 rounded-xl flex items-center justify-center text-white mr-3">
          <Heart className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Your Support Team</h2>
      </div>

      <p className="text-gray-600 mb-4">
        Meet our family specialists ready to help your household
      </p>

      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-12 w-12 rounded-xl object-cover shrink-0"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-xs text-indigo-600 font-medium">
                {member.role}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="bg-white px-2 py-1 rounded-lg text-xs text-gray-600 border"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
