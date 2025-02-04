import appMockup from "@/assets/app-mockup.png";
import { MorphingText } from "../ui/morphing-text";
import Button from "@/shared-components/Button/Button";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

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
    <Zoom delay={150} duration={800}>
      <section className="w-full h-full lg:h-screen flex flex-col-reverse lg:flex-row items-center lg:gap-56  mt-[25%] lg:mt-[10%] ">
        <div className="lg:w-[50%] ">
          <img src={appMockup} alt="" className="w-[800px] lg:ml-32 " />
        </div>

        <div className="lg:w-[50%]">
          <h1 className=" lg:text-5xl font-extrabold">
            <MorphingText texts={texts} className="lg:right-24" />
          </h1>
          <p className="text-base lg:text-xl text-black/80  leading-8 mt-12 mb-12 lg:w-[85%] text-justify lg:text-left ">
            Com experiência no desenvolvimento de aplicativos mobile, utilizo
            React Native para criar apps de forma ágil e eficiente, reduzindo o
            tempo de desenvolvimento sem comprometer a qualidade. Minha
            abordagem foca em performance, usabilidade e escalabilidade,
            garantindo que os aplicativos sejam rápidos, intuitivos e bem
            estruturados.
          </p>

          <Link
            to="https://wa.me/5532984199503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button />
          </Link>
        </div>
      </section>
    </Zoom>
  );
}

export default AppInfo;
