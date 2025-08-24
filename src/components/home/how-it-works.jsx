import { motion } from "framer-motion";

import { steps } from "@/utils/data/home.data";

export default function HowItWorks() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Process
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How HomeServe Works
          </motion.p>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Simple, convenient, and reliable service in just a few steps
          </motion.p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-white overflow-hidden shadow rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center">
                  <div className="bg-indigo-100 rounded-full p-3 text-indigo-600">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-lg font-semibold text-gray-900 flex items-center justify-center">
                    <span className="bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
                      {step.id}
                    </span>
                    {step.title}
                  </div>
                  <p className="mt-2 text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
