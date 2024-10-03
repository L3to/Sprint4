'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NASAImage } from '../../types';

export default function Imagemdanasa() {
    const [imagem, setImagem] = useState<NASAImage | null>(null);


    const gerarDataAleatoria = () => {
        const comeco = new Date(2010, 0, 1);
        const fim = new Date();
        const data = new Date(comeco.getTime() + Math.random() * (fim.getTime() - comeco.getTime()));
        return data.toISOString().split('T')[0];
    };

    useEffect(() => {
        const consumoApi = async () => {
            const dataRandomica = gerarDataAleatoria();
            const response = await fetch(`http://localhost:3000/api/nasa/${dataRandomica}`);
            const dados = await response.json();
            setImagem(dados);
        };
        consumoApi();
    }, []);

    if (!imagem) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Image
                id="pic"
                src={imagem.hdurl}
                alt={imagem.title}
                layout="responsive"
                width={500}
                height={300}
                priority
            />
        </div>
    );
}
