
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-law-gray-dark via-law-wine to-law-gray-dark"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-merriweather">
            RJB & RJB
            <span className="block text-law-gold font-merriweather">Advogado</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light font-merriweather">
            Excelência jurídica com sólida formação e experiência.<br />
            Comprometidos com a justiça e a verdade.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center text-white/80 font-merriweather">
              <MapPin className="h-5 w-5 mr-2 text-law-gold" />
              <span>OAB/PR 115.100</span>
            </div>
            <div className="flex items-center text-white/80 font-merriweather">
              <Phone className="h-5 w-5 mr-2 text-law-gold" />
              <span>(44) 99917-6803</span>
            </div>
            <div className="flex items-center text-white/80 font-merriweather">
              <Mail className="h-5 w-5 mr-2 text-law-gold" />
              <span>rivelino@rivelino.com.br</span>
            </div>
          </div>
          
          <button
            onClick={scrollToContact}
            className="bg-law-gold hover:bg-law-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-merriweather text-lg"
          >
            Entre em Contato
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
