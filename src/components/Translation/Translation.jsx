import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import { HiMiniLanguage } from "react-icons/hi2";
import './translation.css';

const Translation = () => {
  const { language, setLanguage } = useLanguage();
  const [toggleLanguageButton, setToggleLanguageButton] = useState("");

  const toggleLanguage = () => {
    setToggleLanguageButton(language === "es" ? "" : "");
  };

  const changeLanguage2 = () => {
    setLanguage(language=== "es" ? "en" : "es")
  }

  useEffect(() => {
    toggleLanguage();
  }, [language]);


  return (
    <div className="translation-container">
      <button
        className={"translation-container-button-translate"}
        onClick={changeLanguage2}
      >
        <HiMiniLanguage size={50} alt="Icono idioma" className="language" />
        <p htmlFor="" className="languageLabel">{toggleLanguageButton}{" "}</p>
      </button>
    </div>
  );
};

export default Translation;