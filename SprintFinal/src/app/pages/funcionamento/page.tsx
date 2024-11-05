export default function Funcionamento() {
  return (
    <div className="container mx-auto p-5 text-lg">
      <h1 className="text-3xl font-bold mb-5">Serviço de Previsão de Danos em Veículos com Vertex AI</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Objetivo do Serviço</h2>
        <p className="mb-2">
          Nosso serviço utiliza tecnologia avançada para identificar danos em veículos, garantindo uma análise precisa e rápida. Através de um conjunto de imagens de alta qualidade, levamos em consideração fatores como resolução e distância da câmera, que são essenciais para a eficácia do nosso sistema. Essa abordagem é fundamentada em pesquisas, como a do artigo <i>Formulating a More Effective Way to Identify Vehicle Damage with Explainable AI</i>, que destaca a utilização da ferramenta <b>Image Qualifier Model</b>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Estrutura do Dataset</h2>
        <p className="mb-2">
          O nosso sistema analisa imagens de cinco partes específicas dos veículos:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Para-brisa</li>
          <li>Lateral</li>
          <li>Capô</li>
          <li>Motor</li>
          <li>Para-choque</li>
        </ul>
        <p className="mb-2">
          Cada imagem é rotulada conforme a parte do veículo correspondente, e trabalhamos com um banco de dados robusto que inclui uma variedade de tipos de danos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Geração de Orçamento Personalizado</h2>
        <p className="mb-2">
          Com a identificação precisa da parte danificada, podemos gerar um orçamento detalhado para os reparos necessários, levando em consideração o tipo de dano, o modelo do veículo e outros fatores relevantes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Como Funciona o Modelo</h2>
        <p className="mb-2">
          O modelo fornece uma previsão com a parte do veículo identificada e um percentual de confiança. A saída do sistema é clara e compreensível, permitindo que você saiba exatamente o que foi detectado. Um exemplo de resposta pode ser:
        </p>
        <pre className="bg-gray-200 p-3 rounded mb-2 overflow-auto break-all">
          {`{
  "predictions": [
    {
      "confidences": [0.951557755],
      "displayNames": ["para-choque"],
      "ids": ["1960986684719890432"]
    }
  ],
  "deployedModelId": "4271461936421404672",
  "model": "projects/1030115194620/locations/REGION/models/2143634257791156224",
  "modelDisplayName": "damaged_car_parts_vertex",
  "modelVersionId": "1"
}`}
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Acesso ao Cloud Shell</h2>
        <p className="mb-2">
          O Cloud Shell é uma ferramenta que oferece acesso à linha de comando, permitindo que você interaja de forma eficiente com nossos recursos na nuvem. Para começar, basta clicar em "Ativar Cloud Shell" no seu painel de controle.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Considerações Importantes</h2>
        <p className="mb-2">
          Para utilizar este serviço, é necessário ter uma conta no Google Cloud e créditos disponíveis. O período de teste gratuito do Google pode ser uma excelente oportunidade para explorar nosso sistema sem compromisso.
        </p>
      </section>
    </div>
  );
}
