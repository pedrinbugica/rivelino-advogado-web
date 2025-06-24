
import React, { useState, useEffect } from 'react';
import { Building2, Users, Home, Shield, MapPin, Handshake, Scale, X } from 'lucide-react';

const InteractiveServicesWheel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const services = [
    { name: 'Civil', icon: <Home className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'bg-law-gold' },
    { name: 'Penal', icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'bg-law-wine' },
    { name: 'Trabalhista', icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'bg-law-gold' },
    { name: 'Imobiliário', icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'bg-law-wine' },
    { name: 'Empresarial', icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'bg-law-gold' },
    { name: 'Mediação', icon: <Handshake className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'bg-law-wine' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const areasSection = document.getElementById('areas');
      if (areasSection) {
        const rect = areasSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const sectionProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / rect.height));
        setShowIcon(sectionProgress > 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Ícone fixo da balança */}
      <div className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ease-out ${
        showIcon ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}>
        <div
          className="bg-law-wine hover:bg-law-wine/90 p-4 rounded-full shadow-2xl cursor-pointer transition-all duration-500 hover:scale-110 group relative"
          onClick={handleOpen}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <Scale className="h-7 w-7 text-white" />
          
          {/* Tooltip com animação melhorada */}
          <div className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-all duration-500 ${
            isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}>
            <div className="bg-law-gray-dark text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              Ver Serviços
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-3 h-3 bg-law-gray-dark rotate-45"></div>
          </div>

          <div className="absolute inset-0 rounded-full opacity-0 animate-ping bg-white/30 pointer-events-none group-active:opacity-100 md:hidden"></div>
          <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
        </div>
      </div>

      {/* Overlay da roda - TOTALMENTE RESPONSIVO */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-2 animate-in fade-in-0 duration-500"
          onClick={handleClose}
        >
          <div 
            className="relative bg-white rounded-3xl w-full h-full max-w-[95vw] max-h-[95vh] min-h-[600px] shadow-2xl animate-in zoom-in-90 slide-in-from-bottom-8 duration-700 ease-out overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 z-10 group"
            >
              <X className="h-6 w-6 text-gray-500 group-hover:text-law-wine transition-colors duration-300" />
            </button>

            {/* Título */}
            <div className="text-center pt-8 pb-4 px-4 animate-in slide-in-from-top-4 duration-700 delay-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-law-gray-dark mb-3">
                Nossos <span className="text-law-wine">Serviços</span>
              </h3>
              <div className="w-16 sm:w-20 h-1 bg-law-gold mx-auto rounded-full"></div>
            </div>

            {/* Container da roda - CENTRALIZADO E RESPONSIVO */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]">
                {/* Centro da roda com ícone MAIOR da balança */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-law-gray-dark rounded-full flex items-center justify-center z-10 animate-in zoom-in-50 duration-1000 delay-500 shadow-xl">
                  <Scale className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-law-gold" />
                </div>
                
                {/* Serviços ao redor */}
                {services.map((service, index) => {
                  const angle = (index * 60) - 90;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 110; // Ajustado para o novo tamanho
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  return (
                    <div
                      key={service.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-in zoom-in-50 slide-in-from-bottom-4 duration-700"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animationDelay: `${(index * 150) + 700}ms`
                      }}
                    >
                      <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ${service.color} rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-125 group-hover:shadow-2xl transition-all duration-500 ease-out relative overflow-hidden`}>
                        {service.icon}
                        
                        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                      </div>
                      
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
                        <span className="text-law-gray-dark font-semibold text-xs sm:text-sm whitespace-nowrap group-hover:text-law-wine transition-colors duration-300">
                          {service.name}
                        </span>
                      </div>
                      
                      {/* Linha conectora */}
                      <div 
                        className="absolute w-0.5 bg-gradient-to-b from-law-gray-medium/40 to-transparent animate-in slide-in-from-bottom-2 duration-1000"
                        style={{
                          height: `${radius - 50}px`,
                          left: '50%',
                          top: '50%',
                          transformOrigin: 'top center',
                          transform: `translateX(-50%) rotate(${angle + 180}deg)`,
                          animationDelay: `${(index * 150) + 900}ms`
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Texto de instrução */}
            <div className="text-center pb-6 px-4 animate-in fade-in-0 duration-500 delay-1000">
              <p className="text-law-gray-medium text-xs sm:text-sm">
                Clique no X ou toque fora da área para fechar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveServicesWheel;
