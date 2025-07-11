import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMenu, FiX } = FiIcons;

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className={`font-heading font-bold text-xl transition-colors ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}>
              Aloha Air Pros
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:8085552665"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors font-medium shadow-lg"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span className="hidden sm:inline">(808) 555-COOL</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden border-t py-4 ${
              isScrolled 
                ? 'bg-white border-gray-200' 
                : 'bg-white/10 backdrop-blur-md border-white/20'
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className={`text-left px-4 py-2 font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-left px-4 py-2 font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-left px-4 py-2 font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default StickyHeader;