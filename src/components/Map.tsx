
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Map = () => {
  const address = "Rua Neo Alves Martins 2999, sala 91 – Ed. Marquezine";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-law-gray-dark mb-6">
              Nossa <span className="text-law-wine">Localização</span>
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-law-gray-medium max-w-2xl mx-auto">
              Estamos localizados em uma região de fácil acesso. 
              Venha nos visitar para uma consulta presencial.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Address Information */}
            <div className="lg:col-span-1">
              <div className="bg-law-gray-light p-8 rounded-lg h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="bg-law-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-law-gray-dark mb-4">
                    Endereço do Escritório
                  </h3>
                  
                  <p className="text-law-gray-medium mb-6 leading-relaxed">
                    {address}
                  </p>
                  
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-law-wine hover:bg-law-wine-light text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Navigation className="h-5 w-5" />
                    <span>Ver no Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=${encodedAddress}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Localização do Escritório RJB & RJB Advogado"
                />
                
                {/* Overlay for better visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Additional Location Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-law-gray-light rounded-lg">
              <h4 className="font-bold text-law-gray-dark mb-2">Fácil Acesso</h4>
              <p className="text-law-gray-medium">Localização estratégica com fácil acesso e estacionamento</p>
            </div>
            
            <div className="text-center p-6 bg-law-gray-light rounded-lg">
              <h4 className="font-bold text-law-gray-dark mb-2">Transporte Público</h4>
              <p className="text-law-gray-medium">Próximo a pontos de ônibus e principais vias de acesso</p>
            </div>
            
            <div className="text-center p-6 bg-law-gray-light rounded-lg">
              <h4 className="font-bold text-law-gray-dark mb-2">Edifício Comercial</h4>
              <p className="text-law-gray-medium">Sala 91 no moderno Edifício Marquezine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
