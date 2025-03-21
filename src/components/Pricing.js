import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      setIsVisible(true);
    }, []);

    const plans = [
      {
        name: "Individual",
        description: "For the solo sales warrior—get instant cues and personalized insights.",
        price: isAnnual ? 49 : 59,
        features: [
          "Real-time AI cues during calls",
          "Personalized insights and rebuttals",
          "Up to 100 hours of calls per month",
          "Browser extension for desktop calls",
          "Basic call analytics",
          "Email support"
        ],
        cta: "Start Free Trial",
        popular: false
      },
      {
        name: "Team",
        description: "Scale your team's success with advanced features and integrated CRM support.",
        price: isAnnual ? 79 : 99,
        features: [
          "Everything in Individual, plus:",
          "Unlimited hours of calls",
          "Team-wide knowledge sharing",
          "Mobile app for on-the-go calls",
          "CRM integration (Salesforce, HubSpot)",
          "Advanced analytics dashboard",
          "Team performance reports",
          "Priority support"
        ],
        cta: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        description: "Custom solutions for high-performing organizations.",
        price: null,
        features: [
          "Everything in Team, plus:",
          "Custom AI training with your sales materials",
          "Enterprise-grade security and compliance",
          "Dedicated account manager",
          "White-labeling options",
          "API access for custom integrations",
          "Onboarding and training sessions",
          "24/7 premium support"
        ],
        cta: "Contact Sales",
        popular: false
      }
    ];

    return (
      <div className="pt-20">
        <section className="relative overflow-hidden py-24">
          {/* Background gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Choose the plan that powers your sales team's success
              </p>
              
              {/* Billing Toggle */}
              <div className="flex justify-center items-center mb-12">
                <span className={`mr-3 ${!isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                  Monthly
                </span>
                <button 
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${isAnnual ? 'bg-blue-600' : 'bg-gray-400'}`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`}
                  />
                </button>
                <span className={`ml-3 flex items-center ${isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                  Annual
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Save 20%
                  </span>
                </span>
              </div>
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl backdrop-blur-sm overflow-hidden ${
                    plan.popular
                      ? 'bg-gradient-to-b from-blue-600 to-purple-600 text-white shadow-xl transform md:-translate-y-4 scale-105 z-10 border-0'
                      : 'bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700/20 shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-b-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                      {plan.description}
                    </p>
                    <div className="mb-8">
                      {plan.price ? (
                        <>
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                            /user/month
                          </span>
                          {isAnnual && (
                            <div className={`text-sm mt-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                              billed annually
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-2xl font-bold">Custom Pricing</span>
                      )}
                    </div>
                    
                    <button className={`w-full py-3 rounded-lg font-medium mb-8 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    }`}>
                      {plan.cta}
                    </button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`mr-3 mt-1 ${plan.popular ? 'text-blue-200' : 'text-green-500'}`}>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18                           l-6-6 6-6 6 6z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
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

        

        {/* Scroll to Top Button */}
        </div>
    );
}
export default Pricing;