import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen p-4">
      <div className="w-160 h-160 md:w-160 md:h-160 mb-8 md:mb-0 md:mr-8">
        <Image src="/img/source.gif" alt="Saturno destruído" width={800} height={200} priority={true} />
      </div>
      <div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Oh...</h1>
        <p className="text-2xl md:text-4xl mb-4">Parece que o conteúdo que você está tentando acessar não está disponível!</p>
        <Link href="/">
          <p className="px-4 py-2 bg-red-700 text-white text-xl md:text-2xl rounded hover:bg-red-900 transition">Voltar á página inicial</p>
        </Link>
      </div>
    </div>
  );
}
