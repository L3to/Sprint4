import React from "react";
import Image from "next/image";
import Alice from "@/assets/img/alice.jpg";
import Luiz from "@/assets/img/luizc.png";
import LuizK from "@/assets/img/luizk.jpg";

export default function Biografia() {
  return (
    <div className="flex m-10">
      <div>
      <Image
        src={Alice}
        alt="Alice"
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <h1>Alice Teixeira</h1>
      <p>RM556293</p>
      </div>
      <div>
      <Image
        src={Luiz}
        alt="Luiz"
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <h1>Luiz Campos da Silva</h1>
      <p>RM555591</p>
      </div>
      <div>
      <Image
        src={LuizK}
        alt="Luiz K"
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <h1>Luiz Kamada</h1>
      <p>RM557652</p>
      </div>
    </div>
  )
}
