
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users, Home, Shield, MapPin, Handshake } from 'lucide-react';

const InteractiveServicesWheel = () => {
  const navigate = useNavigate();

  const services = [
    { 
      name: 'Civil', 
      icon: <Home className="h-6 w-6" />, 
      color: 'bg-law-gold',
      route: 'civil'
    },
    { 
      name: 'Penal', 
      icon: <Shield className="h-6 w-6" />, 
      color: 'bg-law-wine',
      route: 'penal'
    },
    { 
      name: 'Trabalhista', 
      icon: <Users className="h-6 w-6" />, 
      color: 'bg-law-gold',
      route: 'trabalhista'
    },
    { 
      name: 'Imobiliário', 
      icon: <MapPin className="h-6 w-6" />, 
      color: 'bg-law-wine',
      route: 'imobiliario'
    },
    { 
      name: 'Empresarial', 
      icon: <Building2 className="h-6 w-6" />, 
      color: 'bg-law-gold',
      route: 'empresarial'
    },
    { 
      name: 'Mediação', 
      icon: <Handshake className="h-6 w-6" />, 
      color: 'bg-law-wine',
      route: 'mediacao'
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(`/servico/${route}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-law-gray-dark mb-4">
            Nossos Serviços <span className="text-law-wine">Especializados</span>
          </h2>
          <p className="text-law-gray-medium mb-12 max-w-2xl mx-auto">
            Clique em qualquer área para conhecer mais detalhes sobre nossos serviços especializados
          </p>
          
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
                  onClick={() => handleServiceClick(service.route)}
                >
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl`}>
                    {service.icon}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-law-gray-dark font-semibold text-sm whitespace-nowrap group-hover:text-law-wine transition-colors">
                      {service.name}
                    </span>
                  </div>
                  
                  {/* Linha conectora */}
                  <div 
                    className="absolute w-0.5 bg-law-gray-medium/30 group-hover:bg-law-gold/50 transition-colors"
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
          
          <p className="text-law-gray-medium mt-8 text-sm">
            💡 Clique em qualquer área para saber mais
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesWheel;
