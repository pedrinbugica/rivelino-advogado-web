
import React from 'react';
import { Building2, Users, Home, Shield, MapPin, Handshake } from 'lucide-react';

const Areas = () => {
  const areas = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas, contratos, sociedades e questões corporativas."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas, rescisões, processos e relações de trabalho."
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Direito Civil e Familiar",
      description: "Questões familiares, sucessões, contratos civis e direitos patrimoniais."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Direito Penal",
      description: "Defesa criminal, inquéritos policiais e processos penais."
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis."
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Mediação e Arbitragem",
      description: "Resolução alternativa de conflitos através de mediação e arbitragem."
    }
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-law-gray-dark mb-6">
              Áreas de <span className="text-law-wine">Atuação</span>
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-law-gray-medium max-w-2xl mx-auto">
              Oferecemos serviços especializados em diversas áreas do direito, 
              sempre com foco na excelência e nos resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="group bg-law-gray-light p-8 rounded-lg hover:bg-law-wine hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-law-gold group-hover:text-law-gold-light mb-6 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-law-gray-dark group-hover:text-white mb-4 transition-colors">
                  {area.title}
                </h3>
                <p className="text-law-gray-medium group-hover:text-white/90 transition-colors">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
