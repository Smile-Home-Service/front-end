import { motion } from "framer-motion";
import { CheckCircle, Shield } from "lucide-react";

const benefits = [
  "Book services in 60 seconds",
  "Track your service history",
  "Manage family appointments",
  "Exclusive member offers",
];

export const SignInBenefits = () => {
  return (
    <div>
      <motion.div
        className="hidden lg:block space-y-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-indigo-600 to-rose-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Family Benefits</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <CheckCircle className="h-5 w-5 text-white mr-3" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Secure Sign In
              </h3>
              <p className="text-sm text-gray-600">
                Your phone number is used for secure authentication. We never
                share your personal information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Having trouble signing in? Our family support team is here to help.
          </p>
          <div className="flex space-x-4 text-sm">
            <a
              href="tel:+1555123FAMILY"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Call Support
            </a>
            <a
              href="mailto:help@homeserve.com"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
