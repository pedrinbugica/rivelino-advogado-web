
import React from 'react';
import { CheckCircle, FileText, Users, Scale, Home, Handshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoria jurídica trabalhista",
      description: "Orientação especializada em questões trabalhistas para empresas e empregados."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Direito empresarial",
      description: "Assessoria completa para constituição, alteração e gestão de empresas."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Direito civil e familiar",
      description: "Acompanhamento em questões familiares, divórcios, inventários e sucessões."
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Direito penal",
      description: "Defesa criminal especializada em todas as fases do processo penal."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Direito imobiliário",
      description: "Assessoria em transações imobiliárias, regularizações e questões de propriedade."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Mediação e arbitragem",
      description: "Resolução eficiente de conflitos através de métodos alternativos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-law-gray-dark to-law-wine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-law-gold">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Prestamos serviços jurídicos de alta qualidade, sempre com foco 
              na satisfação e proteção dos interesses de nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-law-gold flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Precisa de Assessoria Jurídica?
              </h3>
              <p className="text-white/90 mb-6">
                Entre em contato conosco e agende uma consulta para discutir seu caso.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-law-gold hover:bg-law-gold/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
