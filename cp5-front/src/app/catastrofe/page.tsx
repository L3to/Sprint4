import Image from 'next/image';
import Imagemdanasa from '../imagemdanasa/page';

export default function Catastrofe() {
  return (
    <div className="p-6">
      <h1 className="text-7xl font-bold mb-4 text-center">A teoria da Catástrofe Cósmica</h1>
      <Imagemdanasa data="2021-02-18" />
      <p className="p-4 text-lg font-afacada">
        A teoria da Catástrofe Cósmica de Immanuel Velikovsky, apresentada em sua obra Worlds in Collision (Mundos em Colisão), publicada em 1950, propõe que eventos cataclísmicos de grande escala ocorreram na Terra devido a perturbações no sistema solar causadas por interações violentas entre os planetas. Essa ideia controversa desafiou o conhecimento científico estabelecido, ao sugerir que planetas, como Vênus e Marte, passaram perto da Terra em tempos históricos recentes, provocando destruição global.
      </p>
      <div className="border-2 border-bege-claro p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Contexto da Teoria</h2>
        <p className="mb-4 font-afacada">
          Velikovsky era um psiquiatra de origem russa com interesse em história e mitologia, e sua teoria surgiu após estudar textos antigos de diversas culturas ao redor do mundo. Ele percebeu semelhanças notáveis em mitos e lendas de civilizações antigas que relatavam catástrofes naturais, como inundações, terremotos e alterações no céu. Para Velikovsky, esses relatos não eram apenas mitos ou exageros, mas descrições precisas de eventos cósmicos reais.
        </p>
        <p className="mb-4 font-afacada">
          Em Worlds in Collision, Velikovsky sugere que Vênus, originalmente um corpo celeste errante, foi ejetado do planeta Júpiter como um cometa, e que suas interações com a Terra provocaram uma série de catástrofes. Ele alegava que esse novo corpo celeste (Vênus) passou perigosamente perto da Terra, mudando suas órbitas e provocando catástrofes globais. Posteriormente, Vênus teria estabilizado sua órbita atual como o segundo planeta do sistema solar.
        </p>
        <div className="flex flex-wrap justify-center mb-4 gap-4">
          <Image src="/img/calculo2.jpg" alt="Imagem de Immanuel Velikovsky" width={400} height={400} className="mb-4 rounded-md" />
          <Image src="/img/calculo.jpg" alt="Imagem de Immanuel Velikovsky" width={400} height={400} className="mb-4 rounded-md" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Principais Alegações de Velikovsky</h2>
        <p className="mb-4 font-afacada">
          Velikovsky usou mitos, textos bíblicos e lendas antigas como evidências para suas afirmações. Alguns dos principais eventos que ele propôs incluem:
        </p>
        <ul className="list-disc list-inside mb-4 font-afacada">
          <li className="mb-2"><strong>Ejeção de Vênus de Júpiter:</strong> Velikovsky afirmou que Vênus foi expulso de Júpiter como um cometa e que, por um tempo, teve uma trajetória elíptica que a trouxe perto da Terra. Essa passagem próxima teria causado grandes catástrofes na Terra, incluindo inundações, terremotos e alterações na crosta terrestre.</li>
          <li className="mb-2"><strong>Pragas do Egito:</strong> Velikovsky correlacionou as pragas bíblicas do Egito, mencionadas no livro de Êxodo, com os efeitos da passagem de Vênus perto da Terra. Ele sugeriu que as pragas, como escuridão, chuva de fogo e gafanhotos, foram causadas por detritos cósmicos, gases e cinzas levantados pela interação entre a Terra e Vênus.</li>
          <li className="mb-2"><strong>Alterações no movimento da Terra:</strong> Uma das alegações mais dramáticas de Velikovsky foi que a Terra experimentou uma alteração no seu eixo de rotação ou até mesmo uma parada temporária, como descrito na passagem bíblica de Josué, onde o &quot;Sol parou no céu&quot;. Ele interpretou esse relato como uma prova de que a Terra sofreu um abalo gravitacional durante a interação com Vênus.</li>
          <li className="mb-2"><strong>Mitos de várias culturas:</strong> Velikovsky argumentou que mitos e lendas em culturas de todo o mundo, como os relatos de inundações, a queda de fogo do céu e terremotos, não eram histórias inventadas, mas registros precisos de catástrofes globais causadas por perturbações cósmicas.</li>
          <li className="mb-2"><strong>Passagem de Marte:</strong> Velikovsky também sugeriu que, após as interações entre Vênus e a Terra, Marte teria passado perto do nosso planeta, causando outro conjunto de catástrofes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Rejeição pela Comunidade Científica</h2>
        <p className="mb-4 font-afacada">
          Apesar do apelo popular de sua teoria, a comunidade científica rejeitou amplamente as ideias de Velikovsky. Astrônomos, geólogos e físicos criticaram seu trabalho por várias razões:
        </p>
        <ul className="list-disc list-inside mb-4 font-afacada">
          <li className="mb-2"><strong>Contradição com a Física Planetária:</strong> Os astrônomos apontaram que a teoria de Velikovsky violava as leis da física, especialmente as leis de movimento e gravidade de Isaac Newton.</li>
          <li className="mb-2"><strong>Ausência de Evidências Geológicas:</strong> Geólogos criticaram a falta de evidências físicas que sustentassem a alegação de Velikovsky de que a Terra sofreu catástrofes globais recentes causadas por interações planetárias.</li>
          <li className="mb-2"><strong>Cronologia Incompatível:</strong> A cronologia proposta por Velikovsky, de que esses eventos catastróficos ocorreram em tempos históricos, era incompatível com o entendimento científico da evolução do sistema solar.</li>
          <li className="mb-2"><strong>Falhas nas Previsões:</strong> Ao longo de suas obras, Velikovsky fez várias previsões baseadas em sua teoria. Algumas, como a previsão sobre a temperatura de Vênus, se mostraram corretas, mas por razões diferentes das que ele propôs.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Impacto Popular e Pseudociência</h2>
        <p className="mb-4 font-afacada">
          Apesar da rejeição científica, as ideias de Velikovsky ganharam popularidade entre o público em geral. A narrativa de catástrofes globais e eventos cósmicos dramáticos ressoou com muitas pessoas, especialmente aquelas interessadas em teorias alternativas e esotéricas.
        </p>
      </div>
    </div>
  );
}
