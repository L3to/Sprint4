import Image from "next/image";
import RowDash from "../assets/img/row-dashboard-image.jpeg";
import Link from "next/link";
import Computador from "../assets/img/row-image1.jpeg";
import Mecanico from "../assets/img/row-image2.jpeg";
import Oficina from "../assets/img/row-image3.jpeg";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full justify-center mt-5 space-y-4 md:space-y-0 md:space-x-4 px-5">
        <div className="w-full md:w-1/2 bg-[#01a1fb] rounded-2xl flex flex-col justify-center p-7">
          <h1 className="text-white 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-5">
            Diagnóstico do seu veículo sem sair de casa
          </h1>
          <Link href="/pages/orcamento">
            <button className="text-lg 2xl:text-5xl xl:text-3xl md:text-xl lg:text-2xl text-white px-8 py-3 border border-white rounded-3xl hover:bg-blue-950 hover:text-white mt-3">
              Faça já o orçamento
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src={RowDash}
            alt="Mulher usando o computador"
            className="rounded-2xl max-w-full h-auto"
          />
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl text-center">
        Conheça os nossos serviços
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 m-5">
        <div className="w-full md:w-1/3">
          <div className="relative h-[300px] md:h-[300px] hover:brightness-75">
            <Link href="/pages/funcionamento">
              <Image
                src={Computador}
                alt="Usando computador"
                className="rounded-2xl object-cover w-full h-full"
                width={600}
                height={400}
              />
              <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-[#01a1fb] rounded-b-2xl text-xl md:text-2xl">
                Conheça o nosso sistema
              </h2>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative h-[300px] md:h-[300px] hover:brightness-75">
            <Link href="/pages/mecanico">
              <Image
                src={Mecanico}
                alt="Mecânico trabalhando"
                className="rounded-2xl object-cover w-full h-full"
                width={600}
                height={400}
              />
              <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-[#01a1fb] rounded-b-2xl text-xl md:text-2xl">
                Mecânico Virtual
              </h2>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative h-[300px] md:h-[300px] hover:brightness-75">
            <Link href="/pages/oficina">
              <Image
                src={Oficina}
                alt="Centro automotivo"
                className="rounded-2xl object-cover w-full h-full"
                width={600}
                height={400}
              />
              <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-[#01a1fb] rounded-b-2xl text-xl md:text-2xl">
                Centro automotivo
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
