
import { NASAImage } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { date: number } }) {

    const file = await fetch('https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk&date=' + params.date);
    const dados: NASAImage[] = await file.json();

    return NextResponse.json(dados);

}