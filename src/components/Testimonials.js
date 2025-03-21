import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = () => {
    const testimonials = [
      {
        id: 1,
        quote: "SalesCue has completely transformed how our team approaches sales calls. Our close rates have increased by 42% since implementation.",
        name: "Sarah Johnson",
        title: "VP of Sales, TechCorp",
        avatar: "/avatars/sarah.jpg"
      },
      {
        id: 2,
        quote: "As someone new to sales, SalesCue gives me the confidence to handle objections like a seasoned pro. It's like having a sales coach with me on every call.",
        name: "Michael Chen",
        title: "Account Executive, GrowthLabs",
        avatar: "/avatars/michael.jpg"
      },
      {
        id: 3,
        quote: "The ROI on SalesCue has been incredible. Within three months, we've seen a 38% increase in successful closes and a 25% reduction in sales cycle length.",
        name: "Elena Rodriguez",
        title: "Sales Director, InnovateX",
        avatar: "/avatars/elena.jpg"
      }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-800/30 p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex-1">
                  <svg className="w-12 h-12 text-blue-500/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl font-medium mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600 w-5' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

    export default TestimonialSlider;