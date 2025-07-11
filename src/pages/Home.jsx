import React from 'react';
import StickyHeader from '../components/StickyHeader';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import SeasonalPromo from '../components/SeasonalPromo';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ServicesGrid />
      <SeasonalPromo />
      <WhyChooseUs />
      <TestimonialCarousel />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;