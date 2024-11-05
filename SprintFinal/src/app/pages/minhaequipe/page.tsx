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
  <div
    className={`flex flex-col md:flex-row ${
      isReversed ? "md:flex-row-reverse" : ""
    } items-center md:items-start`}
  >
    <Image
      src={membro.img}
      alt={membro.nome}
      width={500}
      height={500}
      className="rounded-2xl w-full sm:w-3/4 md:w-auto"
    />
    <div className="m-4 md:m-10 text-center md:text-left">
      <h1 className="text-2xl md:text-5xl">{membro.nome}</h1>
      <p className="text-xl md:text-4xl">{membro.rm}</p>
      <p className="text-xl md:text-4xl">{membro.classe}</p>
    </div>
  </div>
);

export default function Equipe() {
  return (
    <div className="flex flex-col m-4 md:m-10">
      {teamMembers.map((membro, index) => (
        <Membros key={membro.rm} membro={membro} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
}
