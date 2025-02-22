"use client";

import React from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const context = useLanguage();
  if (!context) {
    console.error(
      "useLanguage должен быть использован внутри LanguageProvider"
    );
    return null;
  }

  const { language } = context;

  const aboutText = {
    aboutMe: {
      en: "About me",
      ru: "Обо мне",
    },
    text: {
      en: [
        "Hi, I'm Tabrez – Frontend developer from Dushanbe.",
        "I'm interested in programming and everything connected",
        "with it.",
      ],
      ru: [
        "Привет, меня зовут Табрез - я фронтенд-разработчик из Душанбе.",
        "Я интересуюсь программированием",
        "и всем, что с этим связано.",
      ],
    },
    text2: {
      en: ["I'm studying at courses Introduction to Frontend in Ilmhona."],
      ru: ["Я изучаю курсы по фротенд-разработке в Илмхоне"],
    },
    text3: {
      en: ["Ready to implement excellent projects", "with wonderful people."],
      ru: ["Готов реализовать отличные проекты", "с замечательными людьми."],
    },
  };

  return (
    <div
      id="about"
      className="bg-neutral-100 text-black text-center py-24 xl:px-0 px-14"
    >
      <h1 className="text-4xl font-bold">{aboutText.aboutMe[language]}</h1>
      {aboutText.text[language].map((line, index) => (
        <p key={index} className="my-5">
          {line}
        </p>
      ))}
      {aboutText.text2[language].map((line, index) => (
        <p key={index} className="my-5">
          {line}
        </p>
      ))}
      {aboutText.text3[language].map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
