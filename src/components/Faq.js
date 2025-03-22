import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does SalesCue provide real-time insights?",
      answer: "SalesCue uses AI to analyze tone, sentiment, and key conversation markers, offering dynamic prompts as you speak."
    },
    {
      question: "Can I customize the prompts?",
      answer: "Yes! SalesCue adapts based on your uploaded sales collateral, customer testimonials, and key sales strategies."
    },
    {
      question: "Does SalesCue work with all virtual call platforms?",
      answer: "Yes, SalesCue integrates with Zoom, Google Meet, Microsoft Teams, and other major virtual call tools."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. SalesCue is fully encrypted and compliant with GDPR and SOC2 security standards."
    }
  ];

  return (
    <div className="font-sans">
      {/* FAQ Section */}
      <section className="py-24 bg-white min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about SalesCue.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <HiChevronDown className="h-5 w-5 text-gray-500" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
            <svg className="w-full h-auto fill-white dark:fill-gray-900" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
      </section>

      {/* Newsletter Subscription Section */}
      
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead with SalesCue</h2>
          <p className="text-lg mb-8">Get sales tips, feature updates, and exclusive insights directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-bold hover:bg-gray-100 transition-all duration-300 shadow-md"
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