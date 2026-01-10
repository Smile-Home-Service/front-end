"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  User,
  Mail,
  FileText,
  ArrowRight,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import {
  selectCurrentUser,
  selectIsAuthenticated,
  setUser,
} from "@/lib/store/slices/user.slice";
import {
  useCompleteProfileMutation,
  useLazyGetUserProfileQuery,
} from "@/lib/api/user.api";

export default function CompleteProfilePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector((state) => state.user.token);
  const [updateProfile, { isLoading: isUpdating }] =
    useCompleteProfileMutation();
  const [getUserProfile] = useLazyGetUserProfileQuery();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    } else if (currentUser?.isVerified) {
      router.push("/profile");
    }
  }, [isAuthenticated, currentUser, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData).unwrap();

      // Refetch profile to get updated state including isVerified
      const updatedProfileResponse = await getUserProfile().unwrap();

      dispatch(
        setUser({
          user: updatedProfileResponse.user,
          token: token, // Use the token from selector
        })
      );

      router.push("/profile");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert(
        error?.data?.message || "Failed to update profile. Please try again."
      );
    }
  };

  if (!isAuthenticated || currentUser?.isVerified) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Illustration & Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block space-y-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-rose-600 rounded-2xl shadow-lg">
            <HeartHandshake className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              One last step to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
                complete
              </span>{" "}
              your profile
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us a bit about yourself so we can provide the best service
              experience.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Personalized service recommendations",
              "Faster booking experience",
              "Secure account management",
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Personal Details
            </h2>
            <p className="text-gray-500 mt-1">
              Please fill in your basic information
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                    className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio (Optional)
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  rows={4}
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tell us a bit about yourself..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isUpdating}
              className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {isUpdating ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Complete Profile</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
