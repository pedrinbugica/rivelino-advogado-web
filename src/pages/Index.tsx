
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Areas from '@/components/Areas';
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
      <Areas />
      <Services />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default Index;
