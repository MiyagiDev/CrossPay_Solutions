import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import es from "../../../i18n/español/es.json";
import en from "../../../i18n/ingles/en.json";

const deviceLanguage = navigator.language.split("-")[0]; 

// Asigna el idioma español "es" por defecto

let gettingLocalStorage = 
  localStorage.getItem("language") || 
  (["es", "en"].includes(deviceLanguage) ? deviceLanguage : "es");

i18next.use(initReactI18next).init({
  lng: gettingLocalStorage,  
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  // La información del idioma seleccionado se guarda en el LocalStorage de la página
  // Para mantener la selección aún cuando cambie entre páginas

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(gettingLocalStorage);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const changeLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
  };

  return (
    // Usamos {children} para que todo lo que esté dentro del componente
    // pueda utilizar los parametros como {language, changeLanguage, setLanguage}

    <LanguageContext.Provider value={{ language, changeLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );

};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export {LanguageContext}