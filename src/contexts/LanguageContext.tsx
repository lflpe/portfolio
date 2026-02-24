import React, { createContext, useContext, useState } from 'react';
import { type Language, type Translation } from '../types';
import { pt, en } from '../i18n/translations';

interface LanguageContextValue {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
}

const translations: Record<Language, Translation> = { pt, en };

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
