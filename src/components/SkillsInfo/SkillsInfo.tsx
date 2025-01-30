import SaasMockup from "@/assets/sass-mockup.png";
import Button from "@/shared-components/Button/Button";
import { SparklesText } from "../ui/sparkles-text";
import { AuroraText } from "../ui/aurora-text";

function SkillsInfo() {
  return (
    <section className="w-full h-screen flex items-center justify-center mt-[30%] ">
      <div className="w-[65%] ">
        <div>
          <h1 className="text-5xl font-extrabold">
            Desenvolvendo Sistemas <br /> Eficientes e{" "}
            <AuroraText>
              <SparklesText text="Personalizados" />
            </AuroraText>
          </h1>
          <p className=" text-xl text-black/80  leading-8 mt-12 mb-12 w-[85%] ">
            Tenho sólida experiência no desenvolvimento de sistemas
            personalizados e eficientes, abrangendo todas as etapas do processo,
            desde a concepção até a entrega e manutenção. Com foco em integração
            de APIs e otimização de performance, sou capaz de criar soluções
            minimalistas que atendem de forma precisa às necessidades dos
            usuários, sempre buscando eficiência e simplicidade.
          </p>

          <Button />
        </div>
      </div>

      <div className="w-1/2 bg-gray-100 p-5 rounded-3xl border">
        <img
          src={SaasMockup}
          alt="Imagem ilustrativa de um Saas"
          className="w-full shadow-md rounded-xl"
        />
      </div>
    </section>
  );
}

export default SkillsInfo;
