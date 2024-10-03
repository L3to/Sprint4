import React from 'react';
import Image from 'next/image';

export default function VelikovskyPage() {
  return (
    <>
      <main>
        <h1>Quem foi Immanuel Velikovsky ?</h1>
        <Image
          src="/img/velikovsky.jpg" // Caminho da imagem (certifique-se de que ela esteja na pasta public)
          alt="Immanuel Velikovsky"
          width={300} // Largura da imagem
          height={150} // Altura da imagem
        />
        <p>
          Immanuel Velikovsky (1895–1979) foi um psiquiatra, autor e teórico das
          catástrofes cósmicas que nasceu em Vitebsk, no Império Russo (atual
          Bielorrússia). Ele é mais conhecido por seus trabalhos controversos,
          especialmente o livro <strong>Worlds in Collision</strong> (1950), que
          desafiaram as ideias estabelecidas nas ciências da astronomia,
          geologia e história antiga.
        </p>

        <h2>Formação e Carreira Inicial</h2>
        <p>
          Velikovsky cresceu em uma família judaica e demonstrou interesse por
          várias áreas do conhecimento desde jovem. Ele estudou medicina em
          universidades de Edimburgo, Moscou e Montpellier, formando-se em
          medicina pela Universidade de Moscou em 1921. Após a formatura,
          mudou-se para Berlim, onde se interessou por psicanálise, estudando
          com discípulos de Sigmund Freud. Velikovsky também se envolveu na
          tradução e publicação de textos científicos, o que aprofundou seu
          contato com as ciências e com o mundo intelectual da época.
        </p>

        <h2>A Teoria de Catástrofes Cósmicas</h2>
        <p>
          Nos anos 1940, Velikovsky começou a pesquisar sobre eventos históricos
          descritos em textos religiosos e mitológicos de civilizações antigas.
          Ele acreditava que muitos desses relatos, como os eventos narrados no{' '}
          <strong>Êxodo bíblico</strong>, não eram meramente simbólicos ou
          metafóricos, mas registros de acontecimentos astronômicos e geológicos
          reais. Sua teoria sugeria que interações entre corpos celestes, como
          Vênus e Marte, teriam causado catástrofes globais na Terra em tempos
          relativamente recentes.
        </p>

        <h2>Reação da Comunidade Científica</h2>
        <p>
          <strong>Worlds in Collision</strong> provocou uma reação explosiva da
          comunidade científica, especialmente de astrônomos e físicos. As ideias
          de Velikovsky desafiavam diretamente as leis da mecânica celeste e da
          física estabelecidas, sugerindo que planetas podiam ter órbitas
          altamente instáveis e que esses encontros cósmicos ocorreram em tempos
          históricos recentes. Muitos cientistas o acusaram de pseudociência, e
          o livro foi amplamente rejeitado pelas academias de ciência.
        </p>

        <h2>Trabalhos Posteriores e Legado</h2>
        <p>
          Após o sucesso de <strong>Worlds in Collision</strong>, Velikovsky
          publicou outros livros, como <strong>Ages in Chaos</strong> (1952) e{' '}
          <strong>Earth in Upheaval</strong> (1955), nos quais continuou a
          desenvolver suas teorias sobre a história cósmica da Terra e revisou
          cronologias históricas para alinhar eventos mitológicos com catástrofes
          astronômicas. Ele propôs que as cronologias tradicionais do Egito e do
          Oriente Médio estavam incorretas e que os eventos históricos precisavam
          ser reinterpretados à luz de suas descobertas.
        </p>
      </main>
    </>
  );
}
