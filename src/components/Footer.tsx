
import React from 'react';
import { Scale, Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-law-gray-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-law-gold p-2 rounded-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">RJB & RJB</h3>
                <span className="text-law-gold">Advogado</span>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Escritório de advocacia comprometido com a excelência jurídica, 
              oferecendo soluções eficazes em diversas áreas do direito.
            </p>
            
            <div className="text-white/60">
              <p className="mb-2">
                <strong>OAB/PR:</strong> 15100
              </p>
              <p>
                Dr. Rivelino - Advogado regularmente inscrito na OAB
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', id: 'home' },
                { name: 'Sobre', id: 'about' },
                { name: 'Áreas de Atuação', id: 'areas' },
                { name: 'Contato', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-law-gold transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-law-gold flex-shrink-0" />
                <a 
                  href="tel:+5544999176803"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (44) 99917-6803
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-law-gold flex-shrink-0" />
                <a 
                  href="mailto:rivelino@rivelino.com.br"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  rivelino@rivelino.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  Rua Neo Alves Martins 2999,<br />
                  sala 91 – Ed. Marquezine
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-law-gold flex-shrink-0" />
                <span className="text-white/80">
                  Segunda a Sexta: 8h às 18h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              © {currentYear} RJB & RJB Advogado. Todos os direitos reservados.
            </p>
            
            <div className="text-white/60 text-sm text-center md:text-right">
              <p className="mb-2">
                Site desenvolvido por Pedro Henrique Bugica.
              </p>
              <a 
                href="https://instagram.com/pedro.bugica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-law-gold hover:text-law-gold/80 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@pedro.bugica</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
