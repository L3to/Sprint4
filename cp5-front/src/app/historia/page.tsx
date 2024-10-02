'use client'

import { useEffect, useState } from 'react';
import { NASAImage } from '../../../types';

export default function Historia() {

    const [imagem, setImagem] = useState<NASAImage>({
        title: "",
        date: "",
        explanation: "",
        hdurl: ""
    });

    const api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

    useEffect(() => {
        const consumoApi = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
            const dados = await response.json();
            setImagem(dados);
        }
        consumoApi();

    }, [])



    return (
        <div>
            <h1 id="title">{imagem.title}</h1>
            <p id="date">{imagem.date}</p>
            <img id="pic" src={imagem.hdurl} alt={imagem.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <p id="explanation">{imagem.explanation}</p>
        </div>
    );
}