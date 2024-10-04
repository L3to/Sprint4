import Imagemdanasa from "./imagemdanasa/page";

export default function Home() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={{ position: "relative" }}>
        <Imagemdanasa data="2024-08-28" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rosa-escuro text-center text-5xl md:text-8xl lg:text-9xl font-bold">
          WORLDS IN <br /> COLLISION
        </h1>
      </div>
      <div className="relative text-center p-6 mt-4">
        <div className="absolute top-0 left-0 right-0 mx-auto w-4/5 sm:w-2/5 md:w-2/3 lg:w-2/3 h-1 bg-bege-claro" />
        <h1 className="text-4xl md:text-4xl lg:text-6xl text-bege-claro relative z-10 font-light">
          CONHEÇA O TRABALHO
        </h1>
        <blockquote className="max-w-2xl text-lg md:text-xl lg:text-2xl text-bege-claro relative z-10 mt-4 p-4 border-l-4 border-bege-escuro bg-bege-mais-claro italic mx-auto text-center font-thin">
          &ldquo;Don&#39;t be afraid to face the facts, and never lose your
          ability to ask the questions: Why? and How?&rdquo; <br />
          <span className="block mt-2">― Immanuel Velikovsky</span>
        </blockquote>
        
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-4/5 sm:w-2/5 md:w-2/3 lg:w-2/3 h-1 bg-bege-claro" />
      </div>
    </div>
  );
}
