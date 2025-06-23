
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aqui você implementará a integração com o backend
      // Por enquanto, vamos simular o envio
      console.log('Dados do formulário:', formData);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Telefone / WhatsApp",
      value: "(44) 99917-6803",
      link: "tel:+5544999176803"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "E-mail",
      value: "rivelino@rivelino.com.br",
      link: "mailto:rivelino@rivelino.com.br"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Endereço",
      value: "Rua Neo Alves Martins 2999, sala 91 – Ed. Marquezine",
      link: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Horário de Atendimento",
      value: "Segunda a Sexta: 8h às 18h",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-law-gray-dark mb-6">
              Entre em <span className="text-law-wine">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-law-gray-medium max-w-2xl mx-auto">
              Estamos prontos para ajudá-lo. Entre em contato conosco e 
              agende uma consulta para discutir seu caso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-law-gray-dark mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-law-gold flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-law-gray-dark mb-1">
                        {info.label}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-law-gray-medium hover:text-law-wine transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-law-gray-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* OAB Information */}
              <div className="mt-8 p-6 bg-law-wine/10 rounded-lg border-l-4 border-law-wine">
                <h4 className="font-bold text-law-wine mb-2">Registro OAB</h4>
                <p className="text-law-gray-dark">OAB/PR 15100</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-law-gray-dark mb-8">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-law-gray-dark mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-law-gray-dark mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-law-gray-dark mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent transition-all"
                    placeholder="(44) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-law-gray-dark mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent transition-all resize-none"
                    placeholder="Descreva brevemente sua questão jurídica..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-law-wine hover:bg-law-wine-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
