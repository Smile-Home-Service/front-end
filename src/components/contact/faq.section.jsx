import { motion } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

import { faqItems } from "@/utils/data/contact.data";

export const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
    <motion.div
      className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-linear-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white mr-4">
          <HelpCircle className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Family Questions Answered
          </h2>
          <p className="text-gray-600">
            Common questions from families like yours
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-900 hover:text-indigo-600"
            >
              <span className="text-lg">{faq.question}</span>
              {activeFaq === index ? (
                <ChevronUp className="h-5 w-5 text-indigo-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {activeFaq === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-gray-600 leading-relaxed border-t border-gray-200 pt-3"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
