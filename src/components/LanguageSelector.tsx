import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-lg overflow-hidden border-2 border-white/20 shadow-lg backdrop-blur-sm">
      <button
        onClick={() => setLanguage('de')}
        className={`px-4 py-2.5 text-lg lg:text-xl font-medium transition-all duration-300
          ${language === 'de' 
            ? 'bg-gray-800 text-white' 
            : 'text-white hover:bg-white/10'
          }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2.5 text-lg lg:text-xl font-medium transition-all duration-300
          ${language === 'en' 
            ? 'bg-gray-800 text-white' 
            : 'text-white hover:bg-white/10'
          }`}
      >
        EN
      </button>
    </div>
  );
}; 