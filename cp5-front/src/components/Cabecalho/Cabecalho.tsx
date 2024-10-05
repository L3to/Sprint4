import Menu from "../Menu/Menu";
import Image from "next/image";
export default function Cabecalho() {
  return (
    <header className="cabecalho">
     <Image src="/img/planet.png" alt="Saturno destruído" width={250} height={250} priority={true} />
      <Menu />
    </header>
  )
}
