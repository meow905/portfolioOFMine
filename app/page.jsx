"use client";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";

const links = [
  {
    url: "#home",
    text: "Home",
  },
  {
    url: "#about",
    text: "About",
  },
  {
    url: "#skills",
    text: "Skills",
  },
  {
    url: "#portfolio",
    text: "Portfolio",
  },
  {
    url: "#contact",
    text: "Contacts",
  },
];

export default function Main() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <nav id="navigation" className="w-full xl:px-40 px-0 relative xl:fixed">
        <ul
          className="w-full xl:flex hidden xl:justify-between font-bold fixed
        text-lg py-6 border-b-2 xl:flex-row flex-col items-center gap-6 xl:static  bg-[#F6F6F6] xl:bg-[#ededed] bg opacity-90 xl-opacity-80"
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
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
