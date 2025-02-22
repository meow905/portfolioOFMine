import Image from "next/image";
import picture from "../img/internetShop.png";
import picture2 from "../img/promoWorld.png";
import Link from "next/link";


export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#F6F6F6] md:px-24 px-9 py-5 text-black text-center"
    >
      <h1 className="text-4xl py-12 font-bold">My projects</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="flex flex-col items-center gap-2">
          <Image src={picture}></Image>
          <h2 className="text-2xl">Food delivery website</h2>
          <Link
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:scale-110 transition-all"
            target="blank"
            href={"https://internet-shop-weld.vercel.app/"}
          >
            Click to watch
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={picture2}></Image>
          <h2 className="text-2xl">Website with clothes and other products</h2>
          <Link
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:scale-110 transition-all"
            target="blank"
            href={"https://promo-world.vercel.app/"}
          >
            Click to watch
          </Link>
        </div>
      </div>
    </section>
  );
}
