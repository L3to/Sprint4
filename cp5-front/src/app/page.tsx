import Image from "next/image";
import RowDash from "../assets/img/row-dashboard-image.jpeg";
import Link from "next/link";
import Computador from "../assets/img/row-image1.jpeg";
import Mecanico from "../assets/img/row-image2.jpeg";
import Oficina from "../assets/img/row-image3.jpeg";

export default function Home() {
  return (
    <div>
      <div className="flex w-full justify-center mt-5">
        <div className="w-2/4 bg-[#01a1fb] rounded-2xl m-4">
          <h1 className="text-white text-8xl p-7 mb-3">
            Diagnóstico do seu veículo sem sair de casa
          </h1>
          <button>
            <Link
              className="text-3xl text-white px-10 py-2 border border-white rounded-3xl ml-8 hover:bg-blue-950 hover:text-white"
              href="pages/orcamento"
            >
              Faça já o orçamento
            </Link>
          </button>
        </div>
        <div className="flex items-center justify-center w-2/4 m-4">
          <Image
            src={RowDash}
            alt="Mulher usando o computador"
            className="rounded-2xl max-w-full h-auto6"
          />
        </div>
      </div>
      <h1 className="text-3xl text-center">Conheça os nossos serviços</h1>
      <div className="flex justify-center space-x-4 m-5">
        <div className="w-1/3">
          <div className="relative h-[300px] hover:brightness-75">
            <Link href="/pages/funcionamento">
              <Image
                src={Computador}
                alt="Usando computador"
                className="rounded-2xl object-cover w-full h-full"
                width={300}
                height={300}
              />
              <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-[#01a1fb] rounded-b-2xl text-2xl">
                Conheça o nosso sistema
              </h2>
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative h-[300px] hover:brightness-75">
            <Link href="/pages/mecanico">
              <Image
                src={Mecanico}
                alt="Mecânico trabalhando"
                className="rounded-2xl object-cover w-full h-full"
                width={300}
                height={300}
              />
              <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-[#01a1fb] rounded-b-2xl text-2xl">
                Mecânico Virtual
              </h2>
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative h-[300px] hover:brightness-75">
            <Link href="/pages/oficina">
              <Image
                src={Oficina}
                alt="Centro automotivo"
                className="rounded-2xl object-cover w-full h-full"
                width={300}
                height={300}
              />
              <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-[#01a1fb] rounded-b-2xl text-2xl">
                Centro automotivo
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
