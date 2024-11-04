import Image from "next/image";
import Chave from "../assets/img/chave.webp";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen p-4">
      <div className="w-160 h-160 md:w-160 md:h-160 mb-8 md:mb-0 md:mr-8">
        <Image src={Chave} alt="Saturno destruído" width={800} height={200} priority={true} />
      </div>
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Prego quebrado!</h1>
        <p className="text-2xl md:text-4xl mb-4">Parece que o conteúdo que você está tentando acessar não está disponível!</p>
        <Link href="/">
        <p className="py-2 p-10 bg-red-700 text-white text-xl md:text-2xl rounded hover:bg-red-900 transition inline-block">Voltar à página inicial</p>
        </Link>
      </div>
    </div>
  );
}
