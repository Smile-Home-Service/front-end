"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Plus, MessageCircleCode } from "lucide-react";

export default function FloatingSupportButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-row-reverse items-center space-x-2 space-x-reverse">
      {/* Options */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700"
            >
              <MessageCircle className="w-5 h-5" />
              Chat
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700"
            >
              <Phone className="w-5 h-5" />
              Call
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl hover:bg-indigo-700"
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircleCode className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
