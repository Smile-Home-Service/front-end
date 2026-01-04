import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Clock,
  MessageSquare,
  Send,
  User,
  Phone,
  Sparkles,
  Baby,
  PawPrint,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react";

import { useCreateContactMutation } from "../../lib/api/contact.api";
import {
  setLoading,
  setSuccess,
  setError,
  clearContactState,
  selectContactLoading,
  selectContactSuccess,
  selectContactError,
} from "../../lib/store/slices/contact.slice";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [createContact, { isLoading }] = useCreateContactMutation();

  // Selectors from Redux store
  const loading = useSelector(selectContactLoading);
  const success = useSelector(selectContactSuccess);
  const error = useSelector(selectContactError);

  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear any existing errors when user starts typing
    if (error) {
      dispatch(clearContactState());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      dispatch(clearContactState());

      // Send the contact form data to the API
      const response = await createContact(formData).unwrap();

      // Success handling
      dispatch(setSuccess(true));
      setShowSuccess(true);

      // Reset form
      setFormData({
        fullname: "",
        phone_number: "",
        subject: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        dispatch(clearContactState());
      }, 5000);
    } catch (err) {
      // Error handling
      const errorMessage =
        err?.data?.message || "Failed to send message. Please try again.";
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      dispatch(clearContactState());
    };
  }, [dispatch]);

  return (
    <div className="lg:col-span-2">
      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center"
        >
          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <p className="text-green-800 font-medium">
              Message sent successfully!
            </p>
            <p className="text-green-600 text-sm">
              Our family support team will get back to you soon.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center"
        >
          <XCircle className="h-5 w-5 text-red-600 mr-3" />
          <div>
            <p className="text-red-800 font-medium">Error sending message</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </motion.div>
      )}

      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-linear-to-r from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center text-white mr-4">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-600">We'll get back to you quickly</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                  placeholder="Family name or your name"
                  required
                  disabled={loading || isLoading}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                  placeholder="98xxxxxxxx"
                  required
                  disabled={loading || isLoading}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              How Can We Help Your Family?
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
              placeholder="e.g., Emergency plumbing, regular cleaning, etc."
              required
              disabled={loading || isLoading}
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
              placeholder="Please include any family considerations like pets, children's schedules, or special needs..."
              required
              disabled={loading || isLoading}
            />
          </div>

          <div className="mt-6">
            <motion.button
              type="submit"
              disabled={loading || isLoading}
              className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-linear-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{
                scale: loading || isLoading ? 1 : 1.02,
                boxShadow:
                  loading || isLoading
                    ? "none"
                    : "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
              }}
              whileTap={{ scale: loading || isLoading ? 1 : 0.98 }}
            >
              {loading || isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send to Smile Support Team
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
