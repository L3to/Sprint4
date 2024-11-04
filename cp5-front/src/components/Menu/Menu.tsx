import Link from "next/link";
import { BiAlarm } from "react-icons/bi";
import { BiCar } from "react-icons/bi";


export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/pages/minhaequipe">Minha equipe</Link> </li>
            <li> <Link href="/catastrofe">Histórico</Link><BiAlarm/> </li>
            <li> <Link href="/worlds">Centros Automotivos</Link><BiCar/></li>
        </ul>
    </nav>
  )
}
