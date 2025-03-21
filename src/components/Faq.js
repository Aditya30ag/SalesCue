import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-20">

            <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Everything you need to know about SalesCue.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How does SalesCue provide real-time insights?",
                  answer:
                    "SalesCue uses AI to analyze tone, sentiment, and key conversation markers, offering dynamic prompts as you speak.",
                },
                {
                  question: "Can I customize the prompts?",
                  answer:
                    "Yes! SalesCue adapts based on your uploaded sales collateral, customer testimonials, and key sales strategies.",
                },
                {
                  question: "Does SalesCue work with all virtual call platforms?",
                  answer:
                    "Yes, SalesCue integrates with Zoom, Google Meet, Microsoft Teams, and other major virtual call tools.",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Absolutely. SalesCue is fully encrypted and compliant with GDPR and SOC2 security standards.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                    {faq.question}
                    <HiChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead with SalesCue</h2>
            <p className="text-lg mb-6">Get sales tips, feature updates, and exclusive insights directly to your inbox.</p>
            <form className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full sm:w-80 rounded-lg text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-blue-600 font-bold hover:bg-gray-200 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
    </div>
  );
};

export default Faq;
