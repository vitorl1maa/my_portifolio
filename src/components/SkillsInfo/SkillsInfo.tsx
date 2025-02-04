import SaasMockup from "@/assets/sass-mockup.png";
import Button from "@/shared-components/Button/Button";
import { SparklesText } from "../ui/sparkles-text";
import { AuroraText } from "../ui/aurora-text";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function SkillsInfo() {
  return (
    <section className="w-full lg:h-screen flex items-center justify-center mt-16 lg:mt-0 ">
      <div className="flex flex-col lg:items-center lg:flex-row mt-[10%]">
        <div className="lg:w-[65%] ">
          <div>
            <h1 className="text-2xl lg:text-5xl font-extrabold">
              Desenvolvendo Sistemas <br /> Eficientes e{" "}
              <AuroraText>
                <SparklesText text="Personalizados" />
              </AuroraText>
            </h1>
            <p className="text-base lg:text-xl text-black/80  leading-8 mt-5 mb-12 lg:w-[85%] text-justify lg:text-left ">
              Tenho sólida experiência no desenvolvimento de sistemas
              personalizados e eficientes, abrangendo todas as etapas do
              processo, desde a concepção até a entrega e manutenção. Com foco
              em integração de APIs e otimização de performance, sou capaz de
              criar soluções minimalistas que atendem de forma precisa às
              necessidades dos usuários, sempre buscando eficiência e
              simplicidade.
            </p>

            <Link
              to="https://wa.me/5532984199503"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button />
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 bg-gray-100 p-5 rounded-3xl border mt-20">
          <Zoom delay={150} duration={800} className="w-full">
            <img
              src={SaasMockup}
              alt="Imagem ilustrativa de um Saas"
              className="w-full shadow-md rounded-xl"
            />
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default SkillsInfo;
