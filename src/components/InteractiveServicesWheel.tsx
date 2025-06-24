
import React, { useState, useEffect } from 'react';
import { Building2, Users, Home, Shield, MapPin, Handshake, Scale, X } from 'lucide-react';

const InteractiveServicesWheel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const services = [
    { name: 'Civil', icon: <Home className="h-4 w-4 sm:h-5 sm:w-5" />, color: 'bg-gradient-to-br from-law-gold to-yellow-600' },
    { name: 'Penal', icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" />, color: 'bg-gradient-to-br from-law-wine to-red-800' },
    { name: 'Trabalhista', icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />, color: 'bg-gradient-to-br from-law-gold to-yellow-600' },
    { name: 'Imobiliário', icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />, color: 'bg-gradient-to-br from-law-wine to-red-800' },
    { name: 'Empresarial', icon: <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />, color: 'bg-gradient-to-br from-law-gold to-yellow-600' },
    { name: 'Mediação', icon: <Handshake className="h-4 w-4 sm:h-5 sm:w-5" />, color: 'bg-gradient-to-br from-law-wine to-red-800' }
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
      {/* Ícone fixo da balança - MELHORADO COM GRADIENTE E EFEITOS */}
      <div className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ease-out ${
        showIcon ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}>
        <div
          className="relative bg-gradient-to-br from-law-wine to-red-900 hover:from-law-wine/90 hover:to-red-800 p-3.5 rounded-full shadow-2xl cursor-pointer transition-all duration-500 hover:scale-110 group"
          onClick={handleOpen}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
          style={{ filter: 'drop-shadow(0 0 15px rgba(114, 47, 55, 0.4))' }}
        >
          <Scale className="h-6 w-6 text-white" />
          
          {/* Efeito glow interno */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Animação de pulso sutil */}
          <div className="absolute inset-0 rounded-full bg-law-gold/30 animate-pulse opacity-60"></div>
          
          {/* Tooltip melhorado */}
          <div className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-all duration-500 ${
            isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}>
            <div className="bg-gradient-to-r from-law-gray-dark to-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl border border-law-gold/20">
              Ver Serviços
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-3 h-3 bg-law-gray-dark rotate-45"></div>
          </div>

          {/* Efeitos interativos aprimorados */}
          <div className="absolute inset-0 rounded-full opacity-0 animate-ping bg-white/30 pointer-events-none group-active:opacity-100 md:hidden"></div>
          <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
        </div>
      </div>

      {/* Overlay da roda - VISUAL MODERNIZADO */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 animate-in fade-in-0 duration-500"
          onClick={handleClose}
        >
          <div 
            className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl w-full max-w-[300px] h-fit shadow-2xl animate-in zoom-in-90 slide-in-from-bottom-8 duration-700 ease-out overflow-hidden flex flex-col border border-white/30"
            onClick={(e) => e.stopPropagation()}
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))' }}
          >
            {/* Botão de fechar melhorado */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 hover:bg-law-gray-light/60 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 z-10 group backdrop-blur-sm"
            >
              <X className="h-5 w-5 text-law-gray-medium group-hover:text-law-wine transition-colors duration-300" />
            </button>

            {/* Título com gradiente */}
            <div className="text-center pt-4 pb-3 px-4 animate-in slide-in-from-top-4 duration-700 delay-200">
              <h3 className="text-lg font-bold bg-gradient-to-r from-law-gray-dark to-law-wine bg-clip-text text-transparent mb-2">
                Nossos Serviços
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-law-wine to-law-gold mx-auto rounded-full shadow-sm"></div>
            </div>

            {/* Container da roda - COMPACTO E MODERNIZADO */}
            <div className="flex-1 flex items-center justify-center p-3 min-h-0">
              <div className="relative w-[200px] h-[200px]">
                {/* Centro da roda - PERFEITAMENTE CENTRALIZADO COM EFEITOS */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-full flex items-center justify-center z-10 animate-in zoom-in-50 duration-1000 delay-500 shadow-lg border-2 border-law-gold/30">
                  <Scale className="h-7 w-7 text-law-wine animate-pulse" />
                  
                  {/* Efeito glow no centro */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-law-gold/20 to-law-wine/20 animate-pulse"></div>
                </div>
                
                {/* Serviços ao redor - MODERNIZADOS */}
                {services.map((service, index) => {
                  const angle = (index * 60) - 90;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 65;
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
                      <div className={`w-11 h-11 ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-400 ease-out relative overflow-hidden border border-white/20`}
                           style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))' }}>
                        {service.icon}
                        
                        {/* Efeito brilho hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent scale-0 group-hover:scale-100 transition-transform duration-400 rounded-full"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" 
                             style={{ boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.3)' }}></div>
                      </div>
                      
                      {/* Nome do serviço com estilo aprimorado */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                        <span className="text-law-gray-dark font-semibold text-xs whitespace-nowrap group-hover:text-law-wine group-hover:scale-105 transition-all duration-300 text-center block drop-shadow-sm">
                          {service.name}
                        </span>
                      </div>
                      
                      {/* Linha conectora com gradiente */}
                      <div 
                        className="absolute w-px bg-gradient-to-b from-law-gold/30 via-law-wine/20 to-transparent animate-in slide-in-from-bottom-2 duration-1000"
                        style={{
                          height: `${radius - 28}px`,
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

            {/* Texto de instrução estilizado */}
            <div className="text-center pb-3 px-4 animate-in fade-in-0 duration-500 delay-1000">
              <p className="text-law-gray-medium text-xs font-medium opacity-80">
                Toque fora para fechar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveServicesWheel;
