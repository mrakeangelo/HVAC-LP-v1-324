import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiUsers, FiTool } = FiIcons;

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">
              Your Local HVAC Experts Since 2008
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by native Hawaiian Mike Kahale, Aloha Air Pros has been keeping 
              Oahu families comfortable for over 15 years. We understand the unique 
              challenges of Hawaii's climate and provide solutions that work in paradise.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment goes beyond just fixing air conditioners. We're your 
              neighbors, and we treat every home like our own. From emergency repairs 
              to routine maintenance, we're here to keep your family cool and comfortable.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">Service Area</h4>
                  <p className="text-gray-600">All of Oahu - from Kailua to Kapolei</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">Our Team</h4>
                  <p className="text-gray-600">Licensed, certified professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiTool} className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">Experience</h4>
                  <p className="text-gray-600">15+ years serving Hawaii</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-3">Our Promise to You</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Honest, upfront pricing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Quality workmanship guaranteed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Respect for your home and time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">24/7 emergency support</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Mike Kahale, Owner of Aloha Air Pros"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Mike Kahale</p>
                    <p className="text-sm text-gray-600">Owner & Master Technician</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "Born and raised in Hawaii, I understand what it takes to keep homes 
                  comfortable in paradise."
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg">
              <div className="text-center">
                <p className="font-bold text-xs">EPA</p>
                <p className="text-xs">Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;