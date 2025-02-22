"use client";
import { useState, createContext, useContext } from "react";

const LanguageContext = createContext(null);

const languagesArr = [
  { lang: "en", text: "ENG" },
  { lang: "ru", text: "RU" },
];

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(languagesArr[0].lang);

  function handleChange() {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, languagesArr, handleChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
