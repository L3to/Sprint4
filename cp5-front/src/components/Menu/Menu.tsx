import Link from "next/link";

export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/biografia">Biografia</Link> </li>
            <li> <Link href="/catastrofe">Catástrofes cósmicas</Link> </li>
            <li> <Link href="/worlds">WORLDS IN COLLISION</Link> </li>
        </ul>
    </nav>
  )
}
