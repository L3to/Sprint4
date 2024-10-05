import Link from "next/link";
import Imagemdanasa from "./imagemdanasa/page";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={{ position: "relative" }}>
        <Imagemdanasa data="2024-08-28" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rosa-claro text-center text-5xl md:text-8xl lg:text-9xl font-bold">
          WORLDS IN <br /> COLLISION
        </h1>
      </div>
      <div className="relative text-center p-6 mt-4 flex flex-col items-center">
        <div className="w-4/5 sm:w-2/5 md:w-2/3 lg:w-1/2 h-1 bg-bege-claro" />
        <h1 className="text-4xl md:text-4xl lg:text-6xl text-bege-claro relative z-10 font-light mt-4">
          CONHEÇA O TRABALHO
        </h1>
        <blockquote className="max-w-2xl text-lg md:text-xl lg:text-2xl text-bege-claro relative z-10 mt-4 p-4 border-l-4 border-bege-escuro bg-bege-mais-claro italic mx-auto text-center font-thin">
          &ldquo;Don&#39;t be afraid to face the facts, and never lose your
          ability to ask the questions: Why? and How?&rdquo; <br />
          <span className="block mt-2">― Immanuel Velikovsky</span>
        </blockquote>
        <div className="flex flex-row items-center justify-center mt-4 space-x-4 mx-auto">
          <Image
            src="/img/Velikovsky.jpg"
            alt="Capa do livro Worlds in Collision"
            layout="responsive"
            width={350}
            height={50}
            priority={true}
            className="mt-4"
          />
        </div>
        <div className="w-4/5 sm:w-2/5 md:w-2/3 lg:w-1/2 h-1 bg-bege-claro mt-4" />
        <div className="flex flex-row items-center justify-center mt-4 space-x-4 text-xl md:text-2xl lg:text-3xl">
            <Link href="/worlds" className="bg-orange-800 hover:bg-orange-900 text-white py-2 px-4 rounded">
            WORLDS IN COLLISION: O LIVRO
            </Link>
            <Link href="/biografia" className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded">
            Saiba mais sobre Velikovsky
            </Link>
            <Link href="/catastofre" className="bg-pink-800 hover:bg-pink-900 text-white py-2 px-4 rounded">
            Cálculo da catástrofe
            </Link>
        </div>
      </div>
    </div>
  );
}
