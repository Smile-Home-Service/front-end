import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { useGetFaqsQuery } from "@/lib/api/faq.api";
import { FaqSkeleton } from "../common/skeleton";

export const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const { data, isLoading, isError, error } = useGetFaqsQuery({ limit: 10 });

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const faqs = data?.faq || [];

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
        {isLoading ? (
          <FaqSkeleton />
        ) : isError ? (
          <div className="flex items-center p-4 text-rose-600 bg-rose-50 rounded-xl border border-rose-100">
            <AlertCircle className="w-5 h-5 mr-3" />
            <p className="text-sm">
              {error?.data?.message ||
                "Failed to load FAQs. Please try again later."}
            </p>
          </div>
        ) : faqs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No FAQs found at the moment.
          </div>
        ) : (
          <AnimatePresence>
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full text-left font-semibold text-gray-900 hover:text-indigo-600"
                >
                  <span className="text-lg">{faq.question}</span>
                  {activeFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeFaq === faq.id && (
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
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};
