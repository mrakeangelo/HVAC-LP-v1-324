import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiAward, FiDollarSign, FiStar } = FiIcons;

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiClock,
      title: 'Fast Local Service',
      description: 'Same-day service available with quick response times across Oahu.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FiAward,
      title: 'Licensed & EPA-Certified',
      description: 'Fully licensed, insured, and EPA-certified technicians you can trust.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FiDollarSign,
      title: 'Upfront Pricing',
      description: 'No hidden fees or surprise charges. You know the cost before we start.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FiStar,
      title: '5-Star Rated Technicians',
      description: 'Highly rated professionals committed to exceptional service quality.',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Why Choose Aloha Air Pros?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another HVAC company. We're your local neighbors 
            committed to keeping your home comfortable with reliable, honest service.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${reason.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={reason.icon} className="w-10 h-10" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 bg-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;