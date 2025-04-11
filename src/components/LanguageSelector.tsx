import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="flex rounded-lg overflow-hidden border border-white/10">
        <button
          onClick={() => setLanguage('de')}
          className={`px-3 py-1.5 text-sm font-medium transition-all duration-300
            ${language === 'de' 
              ? 'bg-gray-800 text-white' 
              : 'text-white hover:bg-white/10'
            }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-sm font-medium transition-all duration-300
            ${language === 'en' 
              ? 'bg-gray-800 text-white' 
              : 'text-white hover:bg-white/10'
            }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}; 