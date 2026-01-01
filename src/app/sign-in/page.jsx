"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowLeft,
  HeartHandshake,
  CheckCircle,
  Clock,
} from "lucide-react";

import { SignInBenefits } from "./components/signin.benefits";

export default function SignInPage() {
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [showResend, setShowResend] = useState(false);
  const router = useRouter();

  // Countdown timer for OTP resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && step === "otp") {
      setShowResend(true);
    }
  }, [countdown, step]);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setStep("otp");
    setCountdown(30); // 30 seconds countdown
    setShowResend(false);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP verification
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    // Here you would typically verify the OTP and redirect
    router.push("/profile");
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    setOtp(["", "", "", "", "", ""]);

    // Simulate resend OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setCountdown(30);
    setShowResend(false);
  };

  const handleOtpChange = (value, index) => {
    // Take only the last character entered if value is longer than 1
    const char = value.slice(-1);

    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`;
  };

  const benefits = [
    "Book services in 60 seconds",
    "Track your service history",
    "Manage family appointments",
    "Exclusive member offers",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="/"
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl shadow-lg mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeartHandshake className="h-8 w-8 text-white" />
          </motion.a>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">
            Sign in to manage your family's home services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sign In Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {step === "phone" ? (
                <motion.div
                  key="phone-step"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handlePhoneSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="phone"
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
                          id="phone"
                          value={phoneNumber}
                          onChange={(e) =>
                            setPhoneNumber(formatPhoneNumber(e.target.value))
                          }
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50"
                          placeholder="(555) 123-4567"
                          maxLength={14}
                          required
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        We'll send a verification code to this number
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={
                        isLoading ||
                        phoneNumber.replace(/\D/g, "").length !== 10
                      }
                      className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:cursor-pointer"
                      whileHover={!isLoading ? { scale: 1.02 } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Code...
                        </div>
                      ) : (
                        "Send Verification Code"
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="otp-step"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Back Button */}
                  <button
                    onClick={() => setStep("phone")}
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back
                  </button>

                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Verification Code
                      </label>
                      <p className="text-sm text-gray-600 mb-4">
                        We sent a 6-digit code to {phoneNumber}
                      </p>

                      <div className="flex justify-center space-x-2 mb-4">
                        {otp.map((digit, index) => (
                          <motion.input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) =>
                              handleOtpChange(e.target.value, index)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 bg-white/50"
                            whileFocus={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        {countdown > 0 ? (
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            Resend code in {countdown}s
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={isLoading}
                            className="text-indigo-600 hover:text-indigo-700 font-medium disabled:opacity-50"
                          >
                            Resend Code
                          </button>
                        )}
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading || otp.some((digit) => digit === "")}
                      className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:cursor-pointer"
                      whileHover={!isLoading ? { scale: 1.02 } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Verifying...
                        </div>
                      ) : (
                        "Verify & Sign In"
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                By continuing, you agree to our{" "}
                <a
                  href="/terms"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>

          {/* Benefits Sidebar */}
          <SignInBenefits />
        </div>

        {/* Mobile Benefits */}
        <motion.div
          className="lg:hidden mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-indigo-600 to-rose-600 rounded-2xl p-6 text-white">
            <h3 className="font-semibold mb-4">Family Benefits</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
