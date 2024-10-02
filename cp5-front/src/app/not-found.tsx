import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

  return (
    <div>
      <h1>Oh...</h1>
      <p>Parece que o conteúdo que você está tentando acessar não está disponível!</p>
      <Image src="/img/capalivroimagem404" alt="Capa do livro Worlds in Collision" width={50} height={50} priority={true} />
      <Link href={"/"}>Voltar á página inicial</Link>
    </div>
  )
}   