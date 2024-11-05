import Link from "next/link";
import { BiAlarm } from "react-icons/bi";
import { BiCar } from "react-icons/bi";


export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li className="BtnHome"> <Link href="/">Home</Link> </li>
            <li> <Link href="/pages/minhaequipe">Nossa equipe</Link> </li>
            <li> <Link href="/pages/historico">Histórico</Link><BiAlarm/> </li>
            <li> <Link href="/pages/centrosautomotivos">Centros Automotivos</Link><BiCar/></li>
        </ul>
    </nav>
  )
}