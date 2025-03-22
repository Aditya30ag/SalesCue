import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiOutlineLightningBolt,
  HiOutlineAnnotation,
  HiOutlineCode,
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineClock
} from 'react-icons/hi';
import FeatureCard from './FeatureCard';
import StepCard from './StepCard';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    return (
      <div className="">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SalesCue: Your Real-Time
                </span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sales Sidekick
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-gray-800 mb-8">
                Instantly unlock tailored sales rebuttals and strategic prompts to win every deal.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Free Trial
                </Link>
                <button 
                  className="px-8 py-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Watch Demo
                </button>
              </div>
            </motion.div>
  
            {/* Hero Image/Animation */}
            <motion.div 
              className="max-w-5xl mx-auto mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-800/30 p-3">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
                <div className="rounded-lg overflow-hidden w-full h-full relative">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-800 animate-pulse">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">
                        SalesCue Demo Video/Animation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
  
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg className="w-full h-auto fill-white dark:fill-gray-900" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" />
            </svg>
          </div>
        </section>
  
        {/* Features Overview Section */}
        <section className="bg-white dark:bg-gray-900 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Revolutionize Your Sales Conversations</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                SalesCue empowers your sales team with AI-driven insights, delivered exactly when you need them.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <FeatureCard 
                icon={<HiOutlineLightningBolt className="h-8 w-8 text-blue-500" />}
                title="Real-Time AI Insights"
                description="Our advanced AI analyzes conversations in real-time, identifying opportunities and challenges as they arise."
                delay={0.1}
              />
  
              {/* Feature Card 2 */}
              <FeatureCard 
                icon={<HiOutlineAnnotation className="h-8 w-8 text-purple-500" />}
                title="Tailored Sales Cues"
                description="Get personalized rebuttals, testimonials, and strategic prompts based on your sales materials and company context."
                delay={0.2}
              />
  
              {/* Feature Card 3 */}
              <FeatureCard 
                icon={<HiOutlineCode className="h-8 w-8 text-pink-500" />}
                title="Seamless Integration"
                description="Works with your favorite virtual call platforms as a discreet browser extension or mobile app for on-the-go support."
                delay={0.3}
              />
  
              {/* Feature Card 4 */}
              <FeatureCard 
                icon={<HiOutlineBadgeCheck className="h-8 w-8 text-green-500" />}
                title="Win More Deals"
                description="Boost close rates with perfectly timed prompts that address objections and highlight your unique value proposition."
                delay={0.4}
              />
  
              {/* Feature Card 5 */}
              <FeatureCard 
                icon={<HiOutlineShieldCheck className="h-8 w-8 text-indigo-500" />}
                title="Enterprise Security"
                description="End-to-end encryption and compliance with industry standards ensure your sales data stays secure."
                delay={0.5}
              />
  
              {/* Feature Card 6 */}
              <FeatureCard 
                icon={<HiOutlineClock className="h-8 w-8 text-amber-500" />}
                title="Quick Setup"
                description="Upload your materials, integrate with your call platforms, and start receiving actionable insights immediately."
                delay={0.6}
              />
            </div>
          </div>
        </section>
  
        {/* How It Works Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How SalesCue Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Get up and running in minutes with our simple three-step process.
              </p>
            </div>
  
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Step 1 */}
                <StepCard 
                  number="01"
                  title="Upload Your Materials"
                  description="Provide your sales collateral, company context, and success stories to power the AI engine."
                  delay={0.1}
                />
                
                {/* Step 2 */}
                <StepCard 
                  number="02"
                  title="Connect Your Platforms"
                  description="Integrate with your preferred call platforms using our browser extension or mobile app."
                  delay={0.3}
                />
                
                {/* Step 3 */}
                <StepCard 
                  number="03"
                  title="Receive Real-Time Cues"
                  description="Get intelligent, actionable sales prompts during your conversations exactly when you need them."
                  delay={0.5}
                />
              </div>
            </div>
  
            <div className="mt-16 text-center">
              <Link 
                to="/features"
                className="inline-flex items-center text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Learn more about how it works
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
  
        
        {/* <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                See how SalesCue is transforming sales conversations for teams worldwide.
              </p>
            </div>
  
            <TestimonialSlider />
  
            <div className="mt-12 text-center">
              <Link 
                to="/testimonials"
                className="inline-flex items-center text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                View all customer success stories
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section> */}
      {/* <TestimonialSlider /> */}
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sales Conversations?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of sales professionals leveraging SalesCue to close more deals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-lg bg-white text-blue-600 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/pricing"
                  className="px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;