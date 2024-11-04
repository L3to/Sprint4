import Menu from "../Menu/Menu";
import Image from "next/image";
import Logo from "../../assets/img/porto-logo.png";
import { BiPlusCircle } from "react-icons/bi";
import Bina from "../../assets/img/BINA.png";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="flex justify-between">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            className="Logo"
          />
          <div className="Mais">
          <BiPlusCircle size={60} color="#01a1fb"/>
          </div>
          <Image
            src={Bina}
            alt="Logo Bina"
            className="Bina"
            width={150}
            height={150}
          />
        </div>
        <button>
          <Link href="/pages/login"> Fazer Login</Link>
        </button>
      </div>
      <Menu />
    </header>
  );
}
