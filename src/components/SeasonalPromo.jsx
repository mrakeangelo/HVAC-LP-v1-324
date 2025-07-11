import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiClock, FiPhone } = FiIcons;

const SeasonalPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <SafeIcon icon={FiSun} className="w-8 h-8 text-yellow-300 animate-spin" />
            <span className="text-white font-bold text-2xl">🔥 SUMMER SPECIAL 🔥</span>
            <SafeIcon icon={FiSun} className="w-8 h-8 text-yellow-300 animate-spin" />
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Summer Tune-Up Special
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-3xl md:text-4xl font-bold text-white line-through opacity-70">
              $149
            </span>
            <span className="text-5xl md:text-6xl font-bold text-yellow-300">
              $99
            </span>
          </div>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Beat the heat with our comprehensive AC tune-up service. 
            Keep your system running efficiently all summer long!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-white">
              <SafeIcon icon={FiClock} className="w-5 h-5" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-white rounded-full"></div>
            <div className="flex items-center space-x-2 text-white">
              <span className="font-semibold">🌺 Oahu Residents Only</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:8085552665"
              className="inline-flex items-center justify-center space-x-3 bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Book Now - (808) 555-COOL</span>
            </a>
          </motion.div>

          <div className="mt-8 text-white/80 text-sm">
            <p>Includes: System inspection, filter replacement, coil cleaning, and performance optimization</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalPromo;