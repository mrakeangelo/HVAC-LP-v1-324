import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiSend, FiClock } = FiIcons;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
    alert('Thank you! We\'ll contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to schedule your service? Contact us today for a free estimate 
            and experience the Aloha Air Pros difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading font-bold text-2xl text-navy mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Phone</h4>
                    <a href="tel:8085552665" className="text-lg text-gray-600 hover:text-primary transition-colors">
                      (808) 555-COOL
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Email</h4>
                    <a href="mailto:alohaairpros@gmail.com" className="text-lg text-gray-600 hover:text-primary transition-colors">
                      alohaairpros@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Service Area</h4>
                    <p className="text-lg text-gray-600">
                      All of Oahu, Hawaii
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Hours</h4>
                    <div className="text-gray-600">
                      <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                      <p>Sat: 8:00 AM - 4:00 PM</p>
                      <p>Sun: Emergency Service Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-700 font-semibold text-center">
                  🚨 24/7 Emergency Service Available 🚨
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading font-bold text-2xl text-navy mb-6">
                Request a Quote
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="(808) 555-0123"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ac-installation">AC Installation</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="thermostat">Thermostat Service</option>
                    <option value="duct-cleaning">Duct Cleaning</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your HVAC needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Request</span>
                </button>
              </div>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We'll respond within 2 hours during business hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;