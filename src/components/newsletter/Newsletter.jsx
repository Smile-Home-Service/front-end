import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { useSubscribeNewsletterMutation } from "@/lib/api/newsletter.api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(null);
  const [subscribeNewsletter, { isLoading, isError, isSuccess }] =
    useSubscribeNewsletterMutation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    setShowMessage(null);
    subscribeNewsletter({ email })
      .unwrap()
      .then(() => {
        setEmail("");
        setShowMessage("success");
        setTimeout(() => setShowMessage(null), 5000);
      })
      .catch((error) => {
        console.error("Failed to subscribe:", error);
        setShowMessage("error");
        setTimeout(() => setShowMessage(null), 5000);
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Join Our Family Newsletter
      </h3>
      <p className="text-gray-600 mb-6">
        Get home care tips, special offers, and family-friendly service updates
        delivered to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="your.family@email.com"
          value={email}
          onChange={handleChange}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm disabled:opacity-50"
          disabled={isLoading}
          required
        />
        <motion.button
          type="submit"
          className="flex items-center justify-center px-6 py-3 bg-linear-to-r from-indigo-600 to-rose-600 text-white rounded-2xl text-sm font-semibold hover:from-indigo-700 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isLoading ? 1 : 1.05 }}
          whileTap={{ scale: isLoading ? 1 : 0.95 }}
          disabled={isLoading}
        >
          <Send className="w-4 h-4 mr-2" />
          {isLoading ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </form>
      {showMessage === "success" && (
        <p className="mt-3 text-sm text-green-600 font-medium">
          ✓ Thanks for subscribing!
        </p>
      )}
      {showMessage === "error" && (
        <p className="mt-3 text-sm text-red-600 font-medium">
          ✗ Subscription failed. Please try again.
        </p>
      )}
    </motion.div>
  );
};

export default Newsletter;
