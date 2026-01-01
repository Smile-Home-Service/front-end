"use client";

import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Settings,
  LogOut,
  Calendar,
  Clock,
  CreditCard,
  ChevronRight,
  Shield,
  Bell,
  Heart,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const user = {
    name: "Abishek Khanal",
    email: "abishek@example.com",
    phone: "+977 9800000000",
    address: "Kathmandu, Nepal",
    joinDate: "Member since Jan 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abishek",
  };

  const stats = [
    {
      label: "Bookings",
      value: "12",
      icon: Calendar,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active",
      value: "2",
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Spent",
      value: "$450",
      icon: CreditCard,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Reviews",
      value: "8",
      icon: Heart,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  const menuItems = [
    {
      label: "Account Settings",
      icon: Settings,
      desc: "Personal information & password",
    },
    {
      label: "Notifications",
      icon: Bell,
      desc: "Manage your alerts & updates",
    },
    {
      label: "Privacy & Security",
      icon: Shield,
      desc: "Data protection & connected accounts",
    },
    {
      label: "Payment Methods",
      icon: CreditCard,
      desc: "Manage your cards & billing",
    },
  ];

  const recentBookings = [
    {
      id: 1,
      service: "House Cleaning",
      date: "Oct 24, 2024",
      status: "Completed",
      amount: "$80",
    },
    {
      id: 2,
      service: "Plumbing Repair",
      date: "Oct 15, 2024",
      status: "Completed",
      amount: "$120",
    },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Top Banner */}
      <div className="h-48 bg-gradient-to-r from-indigo-600 to-rose-600 relative">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-32 lg:translate-x-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-1 bg-white rounded-3xl shadow-xl"
          >
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: User Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold text-slate-900">
                  {user.name}
                </h1>
                <p className="text-slate-500 text-sm mt-1">{user.joinDate}</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{user.address}</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-8 flex items-center justify-center space-x-2 px-6 py-3 border border-rose-100 text-rose-600 rounded-2xl hover:bg-rose-50 transition-colors font-semibold"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-4`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-slate-50">
                <h2 className="text-lg font-bold text-slate-900">
                  Manage Account
                </h2>
              </div>
              <div className="divide-y divide-slate-50">
                {menuItems.map((item, i) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.label}
                        </p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Recent Bookings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Bookings
                </h2>
                <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-700">
                  View All
                </button>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/10 transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-slate-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {booking.service}
                          </p>
                          <p className="text-sm text-slate-500">
                            {booking.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">
                          {booking.amount}
                        </p>
                        <p className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                          {booking.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
