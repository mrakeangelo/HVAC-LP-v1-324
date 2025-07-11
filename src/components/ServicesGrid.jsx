import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTool, FiSettings, FiThermometer, FiWind, FiZap, FiClock, FiPhone } = FiIcons;

const ServicesGrid = () => {
  const services = [
    {
      icon: FiTool,
      title: 'AC Installation',
      description: 'Professional installation of new air conditioning systems with warranty coverage.',
      features: ['Energy-efficient units', 'Professional installation', '5-year warranty']
    },
    {
      icon: FiSettings,
      title: 'HVAC Repair & Maintenance',
      description: 'Complete repair and maintenance services to keep your system running smoothly.',
      features: ['Same-day service', 'Preventive maintenance', 'All brands serviced']
    },
    {
      icon: FiThermometer,
      title: 'Thermostat Replacement',
      description: 'Upgrade to smart thermostats for better control and energy savings.',
      features: ['Smart thermostat installation', 'Energy monitoring', 'Remote control setup']
    },
    {
      icon: FiWind,
      title: 'Duct Cleaning & Inspections',
      description: 'Improve air quality with professional duct cleaning and inspection services.',
      features: ['Air quality testing', 'Duct sanitization', 'Allergen removal']
    },
    {
      icon: FiZap,
      title: 'Heating Systems',
      description: 'Installation and repair of heating systems for year-round comfort.',
      features: ['Heat pump installation', 'Furnace repair', 'Energy-efficient options']
    },
    {
      icon: FiClock,
      title: 'Emergency 24/7 Repair',
      description: 'Round-the-clock emergency repair services when you need them most.',
      features: ['24/7 availability', 'Fast response time', 'Emergency pricing']
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From installations to emergency repairs, we provide comprehensive HVAC solutions
            to keep your home comfortable year-round.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                <SafeIcon icon={service.icon} className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <span className="text-green-500 text-sm">✓</span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Get Quote
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="tel:8085552665"
            className="inline-flex items-center space-x-3 bg-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <SafeIcon icon={FiPhone} className="w-5 h-5" />
            <span>Call for Free Estimate</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;