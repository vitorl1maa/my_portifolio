import weStandImage from "@/assets/we_stand.png";
import logoWestand from "@/assets/logo-colorido-png.png";
import { ArrowRight } from "@phosphor-icons/react";
import { WordRotate } from "@/components/ui/word-rotate";

function Westand() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col  mt-[20%] ">
      <h1 className="text-8xl font-extrabold mb-44 text-center ">
        O Que Já Construí ?{" "}
        <WordRotate
          className="text-8xl font-bold text-gray-400"
          words={["Sistemas", "Sites", "Apps"]}
        />
      </h1>

      <div className="flex flex-col gap-20">
        <div className="flex gap-32">
          <div className="w-[60%] bg-gray-100 p-5 rounded-3xl border">
            <img src={weStandImage} alt="Apresentação westand" className="" />
          </div>

          <div className="w-1/2 relative">
            <img src={logoWestand} alt="" className="w-80 absolute -left-10" />

            <p className=" text-xl text-black/80  leading-8 mt-40 w-[85%] ">
              westand é uma plataforma de vendas e gerenciamento de stands.
              Trabalhei juntamente com uma equipe de desenvolvedores,
              contribuindo ativamente para o desenvolvimento e aprimoramento do
              sistema, utilizando principalmente as tecnologias{" "}
              <span className="text-orange-600">JavaScript</span>,{" "}
              <span className="text-orange-600">React JS</span>,{" "}
              <span className="text-orange-600"> Next.js</span>,
              <span className="text-orange-600"> TypeScript</span> e
              <span className="text-orange-600"> Styled-Components</span>.
            </p>

            <div className="mt-20 hover:text-orange-600">
              <ArrowRight size={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Westand;
