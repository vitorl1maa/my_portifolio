import appMockup from "@/assets/app-mockup.png";
import { MorphingText } from "../ui/morphing-text";
import Button from "@/shared-components/Button/Button";
import { Zoom } from "react-awesome-reveal";

function AppInfo() {
  const texts = [
    "Rápido",
    "Dinâmico",
    "Prático",
    "Bonito",
    "Moderno",
    "Performático",
    "Escalável",
  ];

  return (
    <Zoom>
      <section className="w-full h-screen flex items-center gap-56 mt-[10%] ">
        <div className="w-[50%] ">
          <img src={appMockup} alt="" className="w-[800px] ml-32 " />
        </div>

        <div className="w-[50%] ">
          <h1 className="text-5xl font-extrabold">
            <MorphingText texts={texts} className="right-24" />
          </h1>
          <p className=" text-xl text-black/80  leading-8 mt-12 mb-12 w-[85%] ">
            Com experiência no desenvolvimento de aplicativos mobile, utilizo
            React Native para criar apps de forma ágil e eficiente, reduzindo o
            tempo de desenvolvimento sem comprometer a qualidade. Minha
            abordagem foca em performance, usabilidade e escalabilidade,
            garantindo que os aplicativos sejam rápidos, intuitivos e bem
            estruturados.
          </p>

          <Button />
        </div>
      </section>
    </Zoom>
  );
}

export default AppInfo;
