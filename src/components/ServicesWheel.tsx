
import React from 'react';
import { Building2, Users, Home, Shield, MapPin, Handshake } from 'lucide-react';

const ServicesWheel = () => {
  const services = [
    { name: 'Civil', icon: <Home className="h-6 w-6" />, color: 'bg-law-gold' },
    { name: 'Penal', icon: <Shield className="h-6 w-6" />, color: 'bg-law-wine' },
    { name: 'Trabalhista', icon: <Users className="h-6 w-6" />, color: 'bg-law-gold' },
    { name: 'Imobiliário', icon: <MapPin className="h-6 w-6" />, color: 'bg-law-wine' },
    { name: 'Empresarial', icon: <Building2 className="h-6 w-6" />, color: 'bg-law-gold' },
    { name: 'Mediação', icon: <Handshake className="h-6 w-6" />, color: 'bg-law-wine' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-law-gray-dark mb-12">
            Nossos Serviços <span className="text-law-wine">Especializados</span>
          </h2>
          
          <div className="relative w-80 h-80 mx-auto">
            {/* Centro da roda */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-law-gray-dark rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold text-sm">DIREITO</span>
            </div>
            
            {/* Serviços ao redor */}
            {services.map((service, index) => {
              const angle = (index * 60) - 90; // 360/6 = 60 graus entre cada item, -90 para começar no topo
              const radian = (angle * Math.PI) / 180;
              const radius = 120;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              
              return (
                <div
                  key={service.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  }}
                >
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-law-gray-dark font-semibold text-sm whitespace-nowrap">
                      {service.name}
                    </span>
                  </div>
                  
                  {/* Linha conectora */}
                  <div 
                    className="absolute w-0.5 bg-law-gray-medium/30"
                    style={{
                      height: `${radius - 50}px`,
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
        </div>
      </div>
    </section>
  );
};

export default ServicesWheel;
