import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Oh...</h1>
      <p className="text-lg mb-4">Parece que o conteúdo que você está tentando acessar não está disponível!</p>
      <div className="w-12 h-12 mb-4">
        <Image src="/img/source.gif" alt="Saturnodestruído" layout="responsive" width={50} height={50} priority={true} />
      </div>
      <Link href="/"> 
        <p className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-900 transition">Voltar á página inicial</p>
      </Link>
    </div>
  )
}   