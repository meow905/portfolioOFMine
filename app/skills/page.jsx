import Image from "next/image";
import { useLanguage } from "../hooks/useLanguage";
import html from "../img/html-5.png"
import css from "../img/css-3.png"
import js from "../img/js.png"
import react from "../img/react.png"

export default function Skills() {

   const { language } = useLanguage();

   const skillsText = {
    skills: {
      en: "Skills",
      ru: "Скилы"
    },
    suchPrograms: {
      en: "I know such programs as",
      ru: "Я владею такими языками как"
    } 
  }
  return (
    <div id="skills" className="bg-[#FFFFFF] text-black py-12">
      <h1 className="text-4xl font-bold text-center">{skillsText.skills[language]}</h1>
      <p className="py-12 text-center">{skillsText.suchPrograms[language]}</p>
      <div className="flex justify-center gap-[90px] xl:flex-row flex-col items-center">
       <div>
        <Image src={html}></Image>
       </div>
       <div>
        <Image src={css}></Image>
       </div>
       <div>
        <Image className="mt-8" width={200} src={js}></Image>
       </div>
       <div>
        <Image className="mt-8" width={200} src={react}></Image>
       </div>
      
      </div>
    </div>
  );
}
