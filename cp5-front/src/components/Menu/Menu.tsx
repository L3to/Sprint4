import Link from "next/link";

export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/biografia">Biografia</Link> </li>
            <li> <Link href="/catastrofe">Catástrofes cósmicas</Link> </li>
            <li> <Link href="/venus">Intervenção de Vênus</Link> </li>
            <li> <Link href="/cronologia">Cronologias históricas</Link> </li>
        </ul>
    </nav>
  )
}
