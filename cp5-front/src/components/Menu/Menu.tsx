import Link from "next/link";

export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/biografia">Biografia</Link> </li>
            <li> <Link href="/catastrofe">Teoria</Link> </li>
            <li> <Link href="/worlds">Obra</Link> </li>
        </ul>
    </nav>
  )
}
