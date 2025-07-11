import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiExternalLink } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Aloha Air Pros
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted local HVAC experts serving all of Oahu with 
              professional, reliable service since 2008.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-300">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">AC Installation</span>
              </li>
              <li>
                <span className="text-gray-300">HVAC Repair</span>
              </li>
              <li>
                <span className="text-gray-300">Maintenance</span>
              </li>
              <li>
                <span className="text-gray-300">Thermostat Service</span>
              </li>
              <li>
                <span className="text-gray-300">Duct Cleaning</span>
              </li>
              <li>
                <span className="text-gray-300">Emergency Service</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary" />
                <a href="tel:8085552665" className="text-gray-300 hover:text-white transition-colors">
                  (808) 555-COOL
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary" />
                <a href="mailto:alohaairpros@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  alohaairpros@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">
                  Serving all of Oahu, Hawaii
                </span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-red-600 rounded-lg">
              <p className="text-white font-semibold text-sm text-center">
                24/7 Emergency Service
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                © {currentYear} Aloha Air Pros. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by</span>
              <a
                href="https://mrake.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <span>Mrake Agency</span>
                <SafeIcon icon={FiExternalLink} className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;