
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

          {/* Features Grid - Centralizada */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-law-gold mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-law-gray-dark mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-law-gray-medium text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
