import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data";
import type { TeamMember } from "../../../types";

const Membros = ({
  membro,
  isReversed,
}: {
  membro: TeamMember;
  isReversed: boolean;
}) => (
  <div className={`flex ${isReversed ? "flex-row-reverse" : ""}`}>
    <Image
      src={membro.img}
      alt={membro.nome}
      width={500}
      height={500}
      className="rounded-2xl"
    />
    <div className="m-10">
      <h1 className="text-5xl">{membro.nome}</h1>
      <p className="text-4xl">{membro.rm}</p>
      <p className="text-4xl">{membro.classe}</p>
    </div>
  </div>
);

export default function Equipe() {
  return (
    <div className="flex flex-col m-10">
      {teamMembers.map((membro, index) => (
        <Membros key={membro.rm} membro={membro} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
}
