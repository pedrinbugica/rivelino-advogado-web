
import React from 'react';
import { Award, Users, Clock, Scale } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Sólida Formação",
      description: "Advogado regularmente inscrito na OAB com formação acadêmica consistente"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experiência Diversificada",
      description: "Atuação em diversas áreas do Direito com foco em resultados"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Atualização Constante",
      description: "Sempre em dia com as mudanças e novidades do mundo jurídico"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Compromisso com a Justiça",
      description: "Atuação pautada pela ética, justiça e busca pela verdade"
    }
  ];

  return (
    <section id="about" className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-law-gray-dark mb-6">
              Sobre o <span className="text-law-wine">Dr. Rivelino</span>
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-slide-in">
              <p className="text-lg text-law-gray-medium leading-relaxed mb-8">
                Dr. Rivelino é advogado regularmente inscrito na OAB, com sólida formação 
                acadêmica e experiência em diversas áreas do Direito, especialmente nas 
                áreas Cível, Trabalhista e de Família.
              </p>
              
              <p className="text-lg text-law-gray-medium leading-relaxed mb-8">
                Sua atuação é pautada pela atualização constante e pelo comprometimento 
                com a justiça e a verdade, sempre buscando as melhores soluções para 
                seus clientes.
              </p>

              <div className="bg-law-wine/10 border-l-4 border-law-wine p-6 rounded-r-lg">
                <p className="text-law-wine font-semibold italic">
                  "O direito não é apenas uma profissão, é um compromisso com a justiça 
                  e a proteção dos direitos fundamentais de cada pessoa."
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-law-gold mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-law-gray-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-law-gray-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
