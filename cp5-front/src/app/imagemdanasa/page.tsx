'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NASAImage } from '../../types';

export default function Imagemdanasa({data}: {data: string}) {
    const [imagem, setImagem] = useState<NASAImage | null>(null);



    useEffect(() => {
        const consumoApi = async () => {
            const response = await fetch(`http://localhost:3000/api/nasa/${data}`);
            const dados = await response.json();
            setImagem(dados);
        };
        consumoApi();
    }, [data]);

    if (!imagem) {
        return null;
    }

    return (
        <div className="flex justify-center max-h-[80vh] overflow-hidden">
          <Image
            id="pic"
            src={imagem.hdurl}
            alt={imagem.title}
            layout="responsive"
            width={500}
            height={300}
            priority
            className="object-cover object-center brightness-50"
          />
        </div>
      );
    }      
