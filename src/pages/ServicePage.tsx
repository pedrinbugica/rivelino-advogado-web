
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = {
    civil: {
      title: 'Direito Civil',
      description: 'Assessoria completa em questões civis, familiares e sucessórias',
      content: [
        'Divorcios e separações consensuais e litigiosas',
        'Inventários e partilhas de bens',
        'Pensão alimentícia e guarda de menores',
        'Contratos em geral',
        'Responsabilidade civil',
        'Direitos do consumidor',
        'Sucessões e testamentos'
      ],
      benefits: [
        'Atendimento personalizado e humanizado',
        'Resolução eficiente de conflitos familiares',
        'Proteção dos seus direitos patrimoniais'
      ]
    },
    penal: {
      title: 'Direito Penal',
      description: 'Defesa criminal especializada em todas as fases processuais',
      content: [
        'Defesa em inquéritos policiais',
        'Acompanhamento em processos criminais',
        'Recursos em todas as instâncias',
        'Habeas Corpus preventivo e liberatório',
        'Defesa em crimes contra o patrimônio',
        'Crimes de trânsito',
        'Violência doméstica e familiar'
      ],
      benefits: [
        'Defesa técnica qualificada',
        'Acompanhamento em todas as fases processuais',
        'Proteção dos direitos fundamentais'
      ]
    },
    trabalhista: {
      title: 'Direito Trabalhista',
      description: 'Consultoria especializada para empregados e empresas',
      content: [
        'Rescisões contratuais',
        'Horas extras e adiciais',
        'Assédio moral e sexual no trabalho',
        'Acidente de trabalho e doenças ocupacionais',
        'FGTS e seguro-desemprego',
        'Consultoria preventiva para empresas',
        'Negociações coletivas'
      ],
      benefits: [
        'Proteção dos direitos trabalhistas',
        'Consultoria preventiva para evitar conflitos',
        'Recuperação de verbas rescisórias'
      ]
    },
    imobiliario: {
      title: 'Direito Imobiliário',
      description: 'Assessoria em transações e questões imobiliárias',
      content: [
        'Compra e venda de imóveis',
        'Financiamento imobiliário',
        'Locação e despejo',
        'Regularização de imóveis',
        'Usucapião urbano e rural',
        'Condomínios e incorporações',
        'Registro de imóveis'
      ],
      benefits: [
        'Segurança jurídica nas transações',
        'Regularização de propriedades',
        'Assessoria completa em negócios imobiliários'
      ]
    },
    empresarial: {
      title: 'Direito Empresarial',
      description: 'Assessoria jurídica completa para empresas',
      content: [
        'Constituição de empresas',
        'Alterações contratuais',
        'Fusões e aquisições',
        'Contratos empresariais',
        'Recuperação judicial e falência',
        'Compliance empresarial',
        'Sociedades e parcerias'
      ],
      benefits: [
        'Estruturação jurídica adequada',
        'Prevenção de riscos empresariais',
        'Assessoria estratégica para crescimento'
      ]
    },
    mediacao: {
      title: 'Mediação e Arbitragem',
      description: 'Resolução eficiente de conflitos por métodos alternativos',
      content: [
        'Mediação familiar',
        'Mediação empresarial',
        'Arbitragem comercial',
        'Conciliação extrajudicial',
        'Negociação assistida',
        'Mediação de conflitos condominiais',
        'Resolução de disputas contratuais'
      ],
      benefits: [
        'Resolução mais rápida e econômica',
        'Preservação de relacionamentos',
        'Soluções personalizadas e eficazes'
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-law-gray-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-law-gray-dark mb-4">Serviço não encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-law-gold text-white px-6 py-3 rounded-lg hover:bg-law-gold/90 transition-colors"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-law-gray-dark to-law-wine py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar ao Início
              </button>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-merriweather">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Services List */}
                <div>
                  <h2 className="text-3xl font-bold text-law-gray-dark mb-8">
                    Nossos <span className="text-law-wine">Serviços</span>
                  </h2>
                  <div className="space-y-4">
                    {service.content.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-law-gold rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-law-gray-dark">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-3xl font-bold text-law-gray-dark mb-8">
                    Por que <span className="text-law-wine">Escolher-nos?</span>
                  </h2>
                  <div className="space-y-6">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="bg-law-gray-light p-6 rounded-lg">
                        <p className="text-law-gray-dark font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-law-wine py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Precisa de Assessoria em {service.title}?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Entre em contato conosco e agende uma consulta para discutir seu caso específico.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-2 text-law-gold" />
                  <span>(44) 99917-6803</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-2 text-law-gold" />
                  <span>rivelino@rivelino.com.br</span>
                </div>
              </div>
              
              <button
                onClick={scrollToContact}
                className="bg-law-gold hover:bg-law-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
