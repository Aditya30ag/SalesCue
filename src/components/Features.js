import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineLightningBolt,
  HiOutlineAnnotation,
  HiOutlineCode,
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const Features = () => {
    const [activeTab, setActiveTab] = useState('realtime');
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      setIsVisible(true);
    }, []);

    const features = [
      {
        id: 'realtime',
        icon: <HiOutlineLightningBolt className="h-12 w-12 text-blue-500" />,
        title: 'Real-Time Analysis',
        description: 'Our AI captures and processes audio and text data instantly, analyzing tone, sentiment, and key conversational markers to understand the dynamic flow of your discussion.',
        details: [
          'Natural Language Processing that understands context',
          'Sentiment analysis to gauge prospect engagement',
          'Identification of buying signals and objections',
          'Conversation pacing and engagement metrics'
        ],
        image: "/images/features/realtime-analysis.jpg"
      },
      {
        id: 'tailored',
        icon: <HiOutlineAnnotation className="h-12 w-12 text-purple-500" />,
        title: 'Tailored Sales Cues',
        description: 'Using your company details, product information, and customer testimonials, SalesCue generates highly specific, actionable bullet points during calls.',
        details: [
          'Instant objection handling based on your previous successful responses',
          'Relevant testimonial suggestions at the perfect moment',
          'Personalized talking points based on prospect industry and role',
          'Strategic upsell opportunities based on conversation context'
        ],
        image: "/images/features/tailored-cues.jpg"
      },
      {
        id: 'integration',
        icon: <HiOutlineCode className="h-12 w-12 text-pink-500" />,
        title: 'Seamless Integration',
        description: 'Built for ease of use across all your sales channels, SalesCue integrates with your existing tools and platforms.',
        details: [
          'Browser extension for desktop applications with discreet overlays',
          'Native mobile app for on-the-go sales calls',
          'Works with Zoom, Teams, Google Meet, and other virtual meeting platforms',
          'Subtle audio cues via connected earbuds for phone calls'
        ],
        image: "/images/features/seamless-integration.jpg"
      },
      {
        id: 'intelligent',
        icon: <HiOutlineBadgeCheck className="h-12 w-12 text-green-500" />,
        title: 'Discreet & Intelligent',
        description: 'Engineered to be unobtrusive, SalesCue provides soft notifications that don\'t interrupt your conversation flow.',
        details: [
          'Configurable notification settings to match your sales style',
          'AI that learns your preferences over time',
          'Quick-glance format for easy information consumption',
          'Contextually aware prompts that arrive at just the right moment'
        ],
        image: "/images/features/intelligent-design.jpg"
      },
      {
        id: 'security',
        icon: <HiOutlineShieldCheck className="h-12 w-12 text-indigo-500" />,
        title: 'Enterprise Security',
        description: 'End-to-end encryption and compliance with industry standards ensure your sensitive sales data stays secure.',
        details: [
          'GDPR and CCPA compliant data handling',
          'SOC 2 certified infrastructure',
          'Customizable data retention policies',
          'Role-based access controls for team implementations'
        ],
        image: "/images/features/enterprise-security.jpg"
      },
      {
        id: 'automation',
        icon: <HiOutlineClock className="h-12 w-12 text-amber-500" />,
        title: 'Automation & Scalability',
        description: 'The system continuously learns from each interaction, eliminating the need for human intervention and allowing effortless scaling.',
        details: [
          'Self-improving AI that gets better with each call',
          'Team-wide learning that benefits all sales reps',
          'Automated insights and performance analytics',
          'Scales from individual use to enterprise-wide deployment'
        ],
        image: "/images/features/automation-scalability.jpg"
      }
    ];

    const activeFeature = features.find(f => f.id === activeTab);

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
                  Powerful Features
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Discover how SalesCue's powerful features transform your sales conversations
                and help your team close more deals.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Feature Navigation */}
              <div className="flex overflow-x-auto pb-4 mb-8 snap-x scrollbar-hide">
                <div className="flex space-x-2 mx-auto">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveTab(feature.id)}
                      className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                        activeTab === feature.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className="mr-2">{React.cloneElement(feature.icon, { className: 'h-5 w-5' })}</span>
                        {feature.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Feature Description */}
                  <div className="order-2 lg:order-1">
                    <div className="p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700/20 shadow-xl">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 inline-block mb-4">
                        {activeFeature.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{activeFeature.title}</h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {activeFeature.description}
                      </p>
                      <ul className="space-y-3">
                        {activeFeature.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-3 mt-1 text-green-500">
                              <HiOutlineCheckCircle className="h-5 w-5" />
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Feature Image/Illustration */}
                  <div className="order-1 lg:order-2">
                    <div className="rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-800/30 p-3">
                      <div className="rounded-lg overflow-hidden w-full aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-gray-700">
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-500 dark:text-gray-400">
                            {activeFeature.title} Illustration
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Works With Your Favorite Tools</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                SalesCue integrates seamlessly with the platforms you already use.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["Zoom", "Microsoft Teams", "Google Meet", "Slack", "Salesforce", "HubSpot"].map((partner) => (
                <div key={partner} className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 w-40 h-20 flex items-center justify-center">
                  <span className="font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Experience SalesCue?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Transform your sales conversations with real-time, AI-powered cues.
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

export default Features;