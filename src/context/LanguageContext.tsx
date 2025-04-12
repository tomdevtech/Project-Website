import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get initial language from localStorage or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'de') ? savedLanguage : 'en';
  });

  const setLanguage = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Update language based on browser settings on first load
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (!localStorage.getItem('language')) {
      setLanguageState(browserLang.startsWith('de') ? 'de' : 'en');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 