import Image from 'next/image';

export default function Worlds() {
    return(
        <div className="p-6">
        <h1 className="text-7xl font-bold mb-4 text-center">Worlds in Collision</h1>

        <div className="flex justify-center mb-4">

        <Image src="/img/livro.jpg" 
        alt="Capa do livro Worlds in Collision" 
        width={400}
        height={400}
        className="mb-4 rounded-md" />
        </div>


        <p className="p-4 text-lg font-afacada text-center">
        "Worlds in Collision" (em português, *Mundos em Colisão*) é uma obra controversa publicada em 1950 pelo autor russo Immanuel Velikovsky. 
         Velikovsky, que era psiquiatra de formação, propôs teorias radicais que desafiavam as concepções científicas estabelecidas sobre a história
         da Terra e o sistema solar. A principal alegação do livro é que eventos cósmicos cataclísmicos, como a interação entre planetas, teriam moldado
         a história da Terra e provocado catástrofes globais em tempos históricos.<br /><br />
        </p>

        

        <div className="border-4 border-bege-claro p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-2">Principais Temas e Teorias</h2>
            <ul className="list-disc list-inside mb-4 font-afacada">

            <li className="mb-2"><strong>Teoria da Catástrofe Cósmica:</strong> Velikovsky propõe que eventos catastróficos em escala cósmica, como interações entre planetas, moldaram a história da Terra. Ele sugere que planetas, como Vênus e Marte, passaram perto da Terra em tempos históricos, resultando em catástrofes globais.</li>
          
            <li className="mb-2"><strong>Reinterpretação de Relatos Antigos:</strong> O autor analisa textos de diversas culturas, incluindo a Bíblia, e argumenta que relatos de catástrofes naturais (como inundações e terremotos) são descrições de eventos cósmicos reais. Ele usa mitos e lendas de várias civilizações para apoiar suas teorias.</li>
          
            <li className="mb-2"><strong>Ejeção de Vênus:</strong> Velikovsky afirma que Vênus foi ejetado do planeta Júpiter como um cometa e, durante suas passagens próximas à Terra, causou grandes desastres. Ele sugere que a mudança de órbita de Vênus teve implicações drásticas para o planeta Terra.</li>
           
            <li className="mb-2"><strong>Mudanças na Terra: </strong> Entre suas alegações estão a ideia de que a Terra experimentou uma alteração em seu eixo de rotação e que esses eventos podem ser correlacionados com passagens planetárias e suas consequências.</li>
            
            </ul>
        </div>


            <div className="p-6">
            <h1 className="text-7xl font-bold mb-4 text-center">Recepção e Críticas</h1>
            </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-bege-claro rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Rejeição pela Comunidade Científica:</h2>
            <p className="text-lg font-afacada">
            A teoria de Velikovsky foi amplamente rejeitada pela comunidade científica, que a considera incompatível com as leis da física
            e da astronomia. Críticos apontaram a falta de evidências empíricas e a inconsistência com o conhecimento estabelecido sobre o
            sistema solar e a história da Terra.
            </p>
        </div>



        <div className="p-4 border border-bege-claro rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Impacto Popular:</h2>
          <p className="text-lg font-afacada">
          Apesar da rejeição acadêmica, "Worlds in Collision" se tornou um sucesso popular, atraindo leitores interessados em teorias alternativas
          e esotéricas. O livro é frequentemente associado ao movimento de pseudociência.
          </p>
        </div>



        <div className="p-4 border border-bege-claro rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Controvérsias:</h2>
          <p className="text-lg font-afacada">
          A obra gerou um debate intenso sobre o que constitui ciência e como teorias não convencionais devem ser tratadas. Muitos críticos consideraram
          as ideias de Velikovsky uma ameaça à credibilidade científica, argumentando que promover teorias sem bases sólidas poderia abrir espaço para a
          aceitação de pseudociência em outros campos. No entanto, a obra também incentivou discussões sobre a abertura da ciência para novas ideias, mesmo
          que estas desafiem o consenso atual.
          </p>
        </div>



        <div className="p-4 border border-bege-claro rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Previsões Acertadas:</h2>
          <p className="text-lg font-afacada">
          Curiosamente, algumas das previsões de Velikovsky, apesar de suas teorias amplamente rejeitadas, acabaram se confirmando, embora por razões
          diferentes das que ele propôs. Um exemplo é a alta temperatura de Vênus, que foi confirmada décadas depois pela exploração espacial. No entanto,
          os cientistas demonstraram que essa condição é causada pelo efeito estufa em Vênus, e não pelos processos que Velikovsky havia sugerido.
          </p>
        </div>

        <br /><br />

        </div>

        
        <div className="flex justify-center mb-4">

        <Image src="/img/teoria.jpg" 
        alt="Capa do livro Worlds in Collision" 
        width={400}
        height={400}
        className="mb-4 rounded-md" />
        </div>
        

        <p className="p-4 text-lg font-afacada text-center">
        "Worlds in Collision" continua a ser uma obra debatida e analisada tanto no campo da ciência quanto na filosofia da ciência. Embora suas
        teorias sejam amplamente desacreditadas, o livro ainda é mencionado em discussões sobre a interseção entre ciência, mitologia e a busca humana por
        compreensão diante do desconhecido.
    </p>

        
        </div>
        
    )

}
