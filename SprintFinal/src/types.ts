import { StaticImageData } from "next/image";

export type NASAImage = {
    title: string;
    date: string;
    explanation: string;
    hdurl: string;
}
export type TeamMember = {
    nome: string;
    rm: string;
    classe: string;
    img: StaticImageData;
}