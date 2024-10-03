import { NextResponse } from "next/server";

export async function GET() {

    const file = await fetch('https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk');
    const dados = await file.json();
    return NextResponse.json(dados);
}
