"use client";

import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import "./globals.css";
import { usePathname } from "next/navigation"; 


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); 

  return (
    <html lang="pt-br">
      <body>
        {(pathname === "/biografia" || pathname === "/catastrofe" || pathname === "/worlds")   && <Cabecalho />}
        {children}
        {(pathname === "/biografia" || pathname === "/catastrofe" || pathname === "/worlds" || pathname === "/") && <Rodape />}
      </body>
    </html>
  );
}

