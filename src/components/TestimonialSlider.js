import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "SalesCue has completely transformed how our team approaches sales calls. Our close rates have increased by 42% since implementation. The real-time insights have been invaluable for our team members at all experience levels.",
      name: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
      avatar: "/avatars/sarah.jpg",
      companyLogo: "/logos/techcorp.svg",
      stats: {
        improvement: "42%",
        metric: "Close Rate",
      },
    },
    {
      id: 2,
      quote:
        "As someone new to sales, SalesCue gives me the confidence to handle objections like a seasoned pro. It's like having a sales coach with me on every call. I've been able to match the performance of colleagues with years more experience.",
      name: "Michael Chen",
      title: "Account Executive, GrowthLabs",
      avatar: "/avatars/michael.jpg",
      companyLogo: "/logos/growthlabs.svg",
      stats: {
        improvement: "68%",
        metric: "Confidence Score",
      },
    },
    {
      id: 3,
      quote:
        "The ROI on SalesCue has been incredible. Within three months, we've seen a 38% increase in successful closes and a 25% reduction in sales cycle length. Our team now spends less time researching and more time connecting with prospects.",
      name: "Elena Rodriguez",
      title: "Sales Director, InnovateX",
      avatar: "/avatars/elena.jpg",
      companyLogo: "/logos/innovatex.svg",
      stats: {
        improvement: "25%",
        metric: "Reduced Sales Cycle",
      },
    },
    {
      id: 4,
      quote:
        "SalesCue's integration with our existing tools was seamless. We were up and running in less than a day, and the AI began delivering valuable insights from the very first call. It's now an essential part of our tech stack.",
      name: "David Thompson",
      title: "Chief Revenue Officer, Quantum Solutions",
      avatar: "/avatars/david.jpg",
      companyLogo: "/logos/quantum.svg",
      stats: {
        improvement: "56%",
        metric: "Deal Value",
      },
    },
    {
      id: 5,
      quote:
        "What impressed me most about SalesCue is how it continues to learn from our team's interactions. The suggestions have become increasingly tailored to our specific market and customer base. It feels like it was built just for us.",
      name: "Aisha Patel",
      title: "Sales Team Lead, NexGen Enterprises",
      avatar: "/avatars/aisha.jpg",
      companyLogo: "/logos/nexgen.svg",
      stats: {
        improvement: "31%",
        metric: "Customer Satisfaction",
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="min-w-screen min-h-screen flex justify-center items-center bg-white "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white dark:text-black">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-800">
              See how SalesCue is transforming sales conversations for teams
              worldwide.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/30 dark:bg-gray-800 border border-white/20 dark:border-gray-800/30 p-8 md:p-12 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[activeIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="flex flex-col items-center space-y-6 md:w-1/3">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 overflow-hidden flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center text-gray-400 text-2xl font-bold">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-bold text-white dark:text-white text-lg">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[activeIndex].title}
                      </p>
                    </div>

                    <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-md w-full text-center">
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {testimonials[activeIndex].stats.improvement}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonials[activeIndex].stats.metric}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 md:w-2/3">
                    <svg
                      className="w-12 h-12 text-blue-500/20 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl md:text-2xl font-medium mb-6 text-white dark:text-white">
                      "{testimonials[activeIndex].quote}"
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600 dark:text-white text-sm">
                            Verified Customer
                          </span>
                        </div>

                        <div className="text-sm text-gray-500 dark:text-white">
                          {new Date().getFullYear() - 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 dark:bg-gray-600 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          
        </div>
      </section>
      <div className="absolute bottom-0 left-0 w-full">
            <svg
              className="w-full h-auto fill-white dark:fill-gray-900"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
    </div>
  );
};

export default TestimonialSlider;
