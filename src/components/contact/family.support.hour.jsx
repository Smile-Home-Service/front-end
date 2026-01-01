import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";

export const FamilySupportHour = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-linear-to-r from-indigo-600 to-rose-600 rounded-xl flex items-center justify-center text-white mr-3">
          <Clock className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">
          Family Support Hours
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
          <span className="text-gray-700 font-medium">Weekdays</span>
          <span className="font-semibold text-indigo-700">7am - 9pm</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-rose-50 rounded-lg">
          <span className="text-gray-700 font-medium">Weekends</span>
          <span className="font-semibold text-rose-700">8am - 8pm</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
          <span className="text-gray-700 font-medium">Emergency</span>
          <span className="font-semibold text-emerald-700">24/7</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
          <span>Extended hours for working families</span>
        </div>
      </div>
    </motion.div>
  );
};
