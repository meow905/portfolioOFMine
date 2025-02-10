import React from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {

    const { language } = useLanguage();

  const aboutText = {
    aboutMe: {
      en: "About me",
      ru: "Обо мне",
    },
    text: {
      en: "Hi, I'm Tabrez – Frontend developer from Dushanbe.\nIm interested  in programming and everything connected \nwith it.",

      ru: "Привет, меня зовут Табрез - я фронтенд-разработчик из Душанбе.\n Я интересуюсь программированием \nи всем, что с этим связано.",
    },
    text2: {
      en: " I'm studying at courses 'Introduction to Frontend' in\nIlmhona.",
      ru: "Я изучаю курсы по фротенд-разработке в Илмхоне",
    },
    text3: {
      en: "Ready to implement excellent projects \n with wonderful people.",
      ru: "Готовы реализовать отличные проекты \n с замечательными людьми.",
    },
  };

  return (
    <div
      id="about"
      className="bg-neutral-100 text-black text-center py-24 xl:px-0 px-14"
    >
      <h1 className="text-4xl font-bold">{aboutText.aboutMe[language]}</h1>
      <p className="my-5">
        {aboutText.text[language].split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <p className="my-5">
        {aboutText.text2[language].split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <p>
        {aboutText.text3[language].split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
