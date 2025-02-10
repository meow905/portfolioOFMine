"use client";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import { useLanguage } from "./hooks/useLanguage";

const links = [
  {
    url: "#home",
    text: {
      en: "Home",
      ru: "Главное",
    },
  },
  {
    url: "#about",
    text: {
      en: "About",
      ru: "О нас",
    },
  },
  {
    url: "#skills",
    text: {
      en: "Skills",
      ru: "Скилы",
    },
  },
  {
    url: "#portfolio",
    text: {
      en: "Portfolio",
      ru: "Портфолио"
    } 
  },
  {
    url: "#contact",
    text: {
      en: "Contacts",
      ru: "Контакты"
    } 
  },
];

export default function Main() {
  const { language } = useLanguage();
   
  
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <nav id="navigation" className="w-full  px-0 relative xl:fixed">
        <ul
          className="w-full xl:flex hidden xl:justify-between font-bold fixed
        text-lg py-6 px-40 border-b-2 xl:flex-row flex-col items-center gap-6 xl:static  bg-[#F6F6F6] xl:bg-[#ededed] bg opacity-90 xl-opacity-80"
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.text[language]}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
