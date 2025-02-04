import weStandPage from "@/assets/we_stand_lp.png";
import logoWestand from "@/assets/logo-colorido-png.png";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function WestandPage() {
  return (
    <section className="w-full h-full lg:h-screen flex items-center justify-center flex-col mt-[70%]  lg:mt-[20%] ">
      <Zoom delay={150} duration={800}>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-32">
          <div className="lg:w-[60%] bg-gray-100 p-5 rounded-3xl border shadow-md">
            <img
              src={weStandPage}
              alt="Apresentação westand"
              className="rounded-2xl h-full"
            />
          </div>

          <div className="lg:w-1/2 relative">
            <img src={logoWestand} alt="" className="w-80 absolute -left-10" />

            <p className=" text-base lg:text-xl text-black/80  leading-8 mt-40 lg:w-[85%] text-justify text-left">
              Desenvolvido com <span className="text-orange-600">Next.js</span>{" "}
              , o site da WeStand foi criado para apresentar de forma clara e
              eficaz do sistema de vendas e gerenciamento de stands. Com foco na{" "}
              <span className="text-orange-600">captação de leads</span> e{" "}
              <span className="text-orange-600"> SEO </span>
              avançado, garantindo alta performance, carregamento rápido e
              melhor posicionamento nos buscadores.
            </p>

            <Link
              to="https://westand.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-20 hover:text-orange-600">
                <ArrowRight size={50} />
              </button>
            </Link>
          </div>
        </div>
      </Zoom>
    </section>
  );
}

export default WestandPage;
