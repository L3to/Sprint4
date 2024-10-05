import React from "react";
import Image from 'next/image';

export default function Biografia() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Quem foi Immanuel Velikovsky ?</h1>
      <div className="mb-6 flex justify-center">
        <Image 
          src="/img/velikovsky.jpg" 
          alt="Immanuel Velikovsky" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
        <div className="p-4 rounded-lg">
          <p className="text-lg">
            Immanuel Velikovsky (1895–1979) foi um psiquiatra, autor e teórico das
            catástrofes cósmicas que nasceu em Vitebsk, no Império Russo (atual
            Bielorrússia). Ele é mais conhecido por seus trabalhos controversos,
            especialmente o livro <strong>Worlds in Collision</strong> (1950), que
            desafiaram as ideias estabelecidas nas ciências da astronomia,
            geologia e história antiga.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Formação e Carreira Inicial</h2>
          <p className="text-lg">
            Velikovsky cresceu em uma família judaica e demonstrou interesse por
            várias áreas do conhecimento desde jovem. Ele estudou medicina em
            universidades de Edimburgo, Moscou e Montpellier, formando-se em
            medicina pela Universidade de Moscou em 1921. Após a formatura,
            mudou-se para Berlim, onde se interessou por psicanálise, estudando
            com discípulos de Sigmund Freud. Velikovsky também se envolveu na
            tradução e publicação de textos científicos, o que aprofundou seu
            contato com as ciências e com o mundo intelectual da época.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">A Teoria de Catástrofes Cósmicas</h2>
          <p className="text-lg">
            Nos anos 1940, Velikovsky começou a pesquisar sobre eventos históricos
            descritos em textos religiosos e mitológicos de civilizações antigas.
            Ele acreditava que muitos desses relatos, como os eventos narrados no{' '}
            <strong>Êxodo bíblico</strong>, não eram meramente simbólicos ou
            metafóricos, mas registros de acontecimentos astronômicos e geológicos
            reais. Sua teoria sugeria que interações entre corpos celestes, como
            Vênus e Marte, teriam causado catástrofes globais na Terra em tempos
            relativamente recentes.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Reação da Comunidade Científica</h2>
          <p className="text-lg">
            <strong>Worlds in Collision</strong> provocou uma reação explosiva da
            comunidade científica, especialmente de astrônomos e físicos. As ideias
            de Velikovsky desafiavam diretamente as leis da mecânica celeste e da
            física estabelecidas, sugerindo que planetas podiam ter órbitas
            altamente instáveis e que esses encontros cósmicos ocorreram em tempos
            históricos recentes. Muitos cientistas o acusaram de pseudociência, e
            o livro foi amplamente rejeitado pelas academias de ciência.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Trabalhos Posteriores e Legado</h2>
          <p className="text-lg">
            Após o sucesso de <strong>Worlds in Collision</strong>, Velikovsky
            publicou outros livros, como <strong>Ages in Chaos</strong> (1952) e{' '}
            <strong>Earth in Upheaval</strong> (1955), nos quais continuou a
            desenvolver suas teorias sobre a história cósmica da Terra e revisou
            cronologias históricas para alinhar eventos mitológicos com catástrofes
            astronômicas. Ele propôs que as cronologias tradicionais do Egito e do
            Oriente Médio estavam incorretas e que os eventos históricos precisavam
            ser reinterpretados à luz de suas descobertas.
          </p>
        </div>
      </div>
    </div>
  )
}
