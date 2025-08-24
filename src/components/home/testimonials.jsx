export default function Testimonials() {
  return (
    <div className="py-12 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What our customers say
          </motion.p>
        </div>

        <div className="mt-12 relative">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentTestimonial].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-500">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i <
                            Math.floor(testimonials[currentTestimonial].rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      {testimonials[currentTestimonial].rating % 1 !== 0 && (
                        <div className="relative">
                          <Star className="h-5 w-5 text-gray-300" />
                          <div
                            className="absolute top-0 left-0 overflow-hidden"
                            style={{
                              width: `${
                                (testimonials[currentTestimonial].rating % 1) *
                                100
                              }%`,
                            }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-5 w-5 text-indigo-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-5 w-5 text-indigo-600" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 w-3 rounded-full ${
                  currentTestimonial === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
