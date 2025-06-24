
import React, { useState } from 'react';
import { Building2, Users, Home, Shield, MapPin, Handshake, Scale, X } from 'lucide-react';

const InteractiveServicesWheel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Civil', icon: <Home className="h-6 w-6" />, color: 'bg-law-gold' },
    { name: 'Penal', icon: <Shield className="h-6 w-6" />, color: 'bg-law-wine' },
    { name: 'Trabalhista', icon: <Users className="h-6 w-6" />, color: 'bg-law-gold' },
    { name: 'Imobiliário', icon: <MapPin className="h-6 w-6" />, color: 'bg-law-wine' },
    { name: 'Empresarial', icon: <Building2 className="h-6 w-6" />, color: 'bg-law-gold' },
    { name: 'Mediação', icon: <Handshake className="h-6 w-6" />, color: 'bg-law-wine' }
  ];

  return (
    <>
      {/* Ícone fixo da balança */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div
          className="bg-law-wine hover:bg-law-wine/90 p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 group"
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsOpen(true)}
        >
          <Scale className="h-6 w-6 text-white" />
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
            <div className="bg-law-gray-dark text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              Ver Serviços
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-law-gray-dark rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Overlay da roda */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative bg-white rounded-2xl p-8 max-w-lg w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            {/* Título */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-law-gray-dark mb-2">
                Nossos <span className="text-law-wine">Serviços</span>
              </h3>
              <div className="w-16 h-1 bg-law-gold mx-auto"></div>
            </div>

            {/* Roda de serviços */}
            <div className="relative w-72 h-72 mx-auto">
              {/* Centro da roda */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-law-gray-dark rounded-full flex items-center justify-center z-10">
                <Scale className="h-6 w-6 text-white" />
              </div>
              
              {/* Serviços ao redor */}
              {services.map((service, index) => {
                const angle = (index * 60) - 90;
                const radian = (angle * Math.PI) / 180;
                const radius = 100;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                
                return (
                  <div
                    key={service.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(service.icon, { className: "h-5 w-5" })}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <span className="text-law-gray-dark font-semibold text-xs whitespace-nowrap">
                        {service.name}
                      </span>
                    </div>
                    
                    {/* Linha conectora */}
                    <div 
                      className="absolute w-0.5 bg-law-gray-medium/30"
                      style={{
                        height: `${radius - 40}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top center',
                        transform: `translateX(-50%) rotate(${angle + 180}deg)`
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6">
              <p className="text-law-gray-medium text-sm">
                Clique em qualquer lugar para fechar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveServicesWheel;
