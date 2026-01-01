import { motion } from "framer-motion";
import { Clock } from "lucide-react";

import { contactMethods } from "@/utils/data/contact.data";

export const ContactMethod = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex justify-center">
            <div
              className={`bg-linear-to-r ${method.color} rounded-2xl p-3 text-white shadow-lg`}
            >
              {method.icon}
            </div>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {method.title}
          </h3>
          <p className="mt-2 text-gray-900 font-medium text-lg">
            {method.details}
          </p>
          <p className="mt-1 text-sm text-gray-500">{method.description}</p>
          {method.emergency && (
            <div className="mt-2 inline-flex items-center px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">
              <Clock className="w-3 h-3 mr-1" />
              24/7 Emergency
            </div>
          )}
          <button className="mt-4 text-indigo-600 hover:text-indigo-700 text-sm font-semibold">
            {method.action} →
          </button>
        </motion.div>
      ))}
    </div>
  );
};
