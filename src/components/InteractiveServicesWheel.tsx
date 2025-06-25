
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users, Home, Shield, MapPin, Handshake, Scale } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const InteractiveServicesWheel = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    { 
      name: 'Civil', 
      icon: <Home className="h-5 w-5" />, 
      color: 'bg-law-gold',
      route: 'civil',
      description: 'Direito Civil e Familiar',
      details: 'Questões familiares, sucessões, contratos civis e direitos patrimoniais. Divorcios, inventários, pensão alimentícia e muito mais.'
    },
    { 
      name: 'Penal', 
      icon: <Shield className="h-5 w-5" />, 
      color: 'bg-law-wine',
      route: 'penal',
      description: 'Direito Penal',
      details: 'Defesa criminal, inquéritos policiais e processos penais. Acompanhamento completo em todas as fases processuais.'
    },
    { 
      name: 'Trabalhista', 
      icon: <Users className="h-5 w-5" />, 
      color: 'bg-law-gold',
      route: 'trabalhista',
      description: 'Direito Trabalhista',
      details: 'Defesa de direitos trabalhistas, rescisões, processos e relações de trabalho. Consultoria para empregados e empresas.'
    },
    { 
      name: 'Imobiliário', 
      icon: <MapPin className="h-5 w-5" />, 
      color: 'bg-law-wine',
      route: 'imobiliario',
      description: 'Direito Imobiliário',
      details: 'Compra, venda, locação e regularização de imóveis. Assessoria completa em transações imobiliárias.'
    },
    { 
      name: 'Empresarial', 
      icon: <Building2 className="h-5 w-5" />, 
      color: 'bg-law-gold',
      route: 'empresarial',
      description: 'Direito Empresarial',
      details: 'Assessoria completa para empresas, contratos, sociedades e questões corporativas. Consultoria estratégica.'
    },
    { 
      name: 'Mediação', 
      icon: <Handshake className="h-5 w-5" />, 
      color: 'bg-law-wine',
      route: 'mediacao',
      description: 'Mediação e Arbitragem',
      details: 'Resolução alternativa de conflitos através de mediação e arbitragem. Soluções mais rápidas e econômicas.'
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(`/servico/${route}`);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Ícone discreto da balança */}
        <div className="w-14 h-14 bg-law-wine rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
          <Scale className="h-7 w-7 text-white" />
        </div>

        {/* Roda expandida */}
        <div className={`absolute bottom-0 left-0 transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="relative w-72 h-72">
            {/* Centro da roda */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 shadow-lg border-2 border-law-wine">
              <Scale className="h-6 w-6 text-law-wine" />
            </div>
            
            {/* Serviços ao redor */}
            {services.map((service, index) => {
              const angle = (index * 60) - 90;
              const radian = (angle * Math.PI) / 180;
              const radius = 110;
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
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div 
                        className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl`}
                        onClick={() => handleServiceClick(service.route)}
                      >
                        {service.icon}
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white border border-law-gray-medium/20 shadow-xl">
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-law-wine">{service.description}</h4>
                        <p className="text-sm text-law-gray-dark">{service.details}</p>
                        <div className="pt-2">
                          <span className="text-xs text-law-gold font-medium">
                            💡 Clique para saber mais
                          </span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-law-gray-dark font-semibold text-xs whitespace-nowrap group-hover:text-law-wine transition-colors bg-white px-2 py-1 rounded shadow-sm">
                      {service.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tooltip de instrução */}
        {!isExpanded && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-law-gray-dark text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Passe o mouse para ver os serviços
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveServicesWheel;
