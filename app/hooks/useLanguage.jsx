"use client";
import { useState, createContext, useContext } from "react";

const LanguageContext = createContext(undefined);

const languagesArr = [
  {
    lang: "en",
    text: "ENG",
  },

  {
    lang: "ru",
    text: "RU",
  },
];

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(languagesArr[0].lang);

  function handleChange() {
    if (language === "en") {
      setLanguage(languagesArr.filter((lang) => lang.lang === "ru")[0].lang);
    } else {
      setLanguage(languagesArr.filter((lang) => lang.lang === "en")[0].lang);
    }
  }
  return (
    <LanguageContext.Provider value={{ language, languagesArr, handleChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) return console.log("Use context at the main jsx file");
  return context;
};
