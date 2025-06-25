
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users, Home, Shield, MapPin, Handshake, CheckCircle, FileText, Scale } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AreasServices = () => {
  const navigate = useNavigate();

  const areas = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas, contratos, sociedades e questões corporativas.",
      route: "empresarial"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas, rescisões, processos e relações de trabalho.",
      route: "trabalhista"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Direito Civil e Familiar",
      description: "Questões familiares, sucessões, contratos civis e direitos patrimoniais.",
      route: "civil"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Direito Penal",
      description: "Defesa criminal, inquéritos policiais e processos penais.",
      route: "penal"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis.",
      route: "imobiliario"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Mediação e Arbitragem",
      description: "Resolução alternativa de conflitos através de mediação e arbitragem.",
      route: "mediacao"
    }
  ];

  const handleAreaClick = (route: string) => {
    navigate(`/servico/${route}`);
  };

  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-law-gray-dark to-law-wine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Áreas de Atuação e <span className="text-law-gold">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Oferecemos serviços especializados em diversas áreas do direito, 
              sempre com foco na excelência e nos resultados.
            </p>
          </div>

          {/* Carrossel de Áreas */}
          <div className="max-w-5xl mx-auto mb-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {areas.map((area, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
                      onClick={() => handleAreaClick(area.route)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-law-gold flex-shrink-0">
                          {area.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-3">
                            {area.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Call to Action */}
          <div className="text-center">
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

export default AreasServices;
