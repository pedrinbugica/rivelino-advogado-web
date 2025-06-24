
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import ServicesWheel from './ServicesWheel';
import InteractiveServicesWheel from './InteractiveServicesWheel';

const ServicesSelector = () => {
  const [useInteractive, setUseInteractive] = useState(false);

  return (
    <>
      {/* Botão para alternar versões - apenas para teste */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setUseInteractive(!useInteractive)}
          className="bg-law-gold hover:bg-law-gold/90 text-white p-2 rounded-full shadow-lg transition-all duration-300"
          title={`Alternar para versão ${useInteractive ? 'tradicional' : 'interativa'}`}
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {/* Renderizar a versão escolhida */}
      {useInteractive ? (
        <InteractiveServicesWheel />
      ) : (
        <ServicesWheel />
      )}
    </>
  );
};

export default ServicesSelector;
