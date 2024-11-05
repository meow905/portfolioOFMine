"use client";
import Image from "next/image";
import img from "../img/menu-regular-72.png";
import close from "../img/Group.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ChangeButtun from "../changelanguage/page";
import { texts } from "../util/text";
import { useLanguage } from "../hooks/useLanguage";
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

export default function Home() {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);

  function closeMenu() {
    setOpenModal(false);
  }

  function openMenu() {
    setOpenModal(true);
    console.log(openModal);
  }
  return (
    <section id="home" className="xl:py-24 py-12 xl:px-40 mb-8 px-4 ">
      <div className="flex justify-between  xl:items-center items-start xl:flex-row flex-col">
        <h1 className="text-5xl xl:block block">
          {texts.name[language]} <br />
          {texts.secondName[language]}
        </h1>
        <p className="xl:self-end self-start xl:mt-0 mt-5 xl:ml-0 ml-1 xl:block block">
          {texts.work[language]} <br /> {texts.years[language]}
        </p>
        <div className="xl:flex hidden">
          <ChangeButtun />
        </div>
        <button onClick={openMenu} className="absolute right-5 top-14">
          <Image
            src={img}
            alt="menu"
            className=" w-10 cursor-pointer xl:hidden block"
          />
        </button>
      </div>

      <div className="imgDiv mt-12"></div>

      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1100]"
          onClose={closeMenu}
          open={openModal}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out  transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto min-h-screen bg-white w-full h-screen opacity-90">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-200 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-full h-full bg-black opacity-90 text-white relative p-0">
                <button
                  className="absolute top-4 right-4 z-50"
                  onClick={() => closeMenu()}
                  alt="close"
                >
                  <Image src={close} alt="close" />
                </button>

                <Dialog.Panel>
                  <div className="container mx-auto max-w-screen-2xl">
                    <nav id="navigation" className="w-full relative xl:fixed">
                      <ul
                        className="w-full flex xl:hidden xl:justify-between items-center font-bold fixed
                 text-lg py-6 border-b-2 xl:flex-row flex-col  gap-6 xl:static  bg-transparent opacity-90 xl-opacity-80"
                      >
                        {links.map((link, index) => {
                          return (
                            <li key={index}>
                              <a href={link.url} onClick={closeMenu}>
                                {link.text}
                              </a>
                            </li>
                          );
                        })}
                        <ChangeButtun rotate={false} />{" "}
                      </ul>
                      <div></div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
