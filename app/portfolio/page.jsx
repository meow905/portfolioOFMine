import Image from "next/image";
import picture from "../img/19eb6e72d32e254c8b02825f0390f169.jpg";
import picture2 from "../img/4dc19da808f0bf66bdd48c26c8228ec8.png";
import picture3 from "../img/reebok_web.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F6F6F6] text-black text-center">
      <h1 className="text-4xl py-12 font-bold">Portfolio</h1>
      <div className="flex justify-center">
        <Image
          src={picture}
          alt="woman"
          priority={true}
          className="xl:w-[1000px] xl:h-[600px] w-[320px] h-[175px]"
        />
      </div>
      <div className="flex justify-center py-12">
        <p className="text-[18px] font-medium border-b-2 border-black max-w-max p-0 m-0">
          Online fashion store - Homepage
        </p>
      </div>
      <div className="flex justify-center pb-12">
        <Image
          src={picture2}
          priority={false}
          alt="black guy"
          className="xl:w-[1000px] xl:h-[600px] w-[320px] h-[175px]"
        />
      </div>
      <div className="flex justify-center pb-12">
        <p className="text-[18px] font-medium border-b-2 border-black max-w-max p-0 m-0">
          Reebok Store - Concept
        </p>
      </div>
      <div className="flex justify-center pb-12">
        <Image
          src={picture3}
          priority={false}
          alt="braun"
          className="xl:w-[1000px] xl:h-[600px] w-[320px] h-[175px]"
        ></Image>
      </div>
      <div className="flex justify-center pb-12">
        <p className="text-[18px] font-medium border-b-2 border-black max-w-max p-0 m-0">
          Braun Landing Page - Concept
        </p>
      </div>
    </section>
  );
}
