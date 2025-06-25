
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AreasServices from '@/components/AreasServices';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <AreasServices />
      <Services />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default Index;
