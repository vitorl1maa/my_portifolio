import profileImg from "@/assets/profile.jpg";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { NumberTicker } from "../ui/number-ticker";
import TooltipDefault from "@/shared-components/TooltipDefault/TooltipDefault";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="w-full h-auto lg:h-screen flex flex-col justify-center mt-[33%] lg:mt-[30%]">
      <div className="flex flex-col justify-center items-center " id="sobre">
        <Fade direction="down" className="z-50">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl lg:text-5xl font-extrabold mb-20 lg:w-[55%] text-center mt-20 ">
              Desenvolvo aplicações <span className="text-gray-400">web</span> e
              <span className="text-gray-400"> mobile </span> rápidas,
              intuitivas e fáceis de usar
            </h1>

            <div className="w-full lg:w-[900px]">
              <img
                src={profileImg}
                alt="foto paletra sobre tecnologia"
                className="rounded-2xl"
              />
            </div>
          </div>
        </Fade>

        <Fade
          direction="down"
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-[60%] gap-12 mt-20 lg:mt-32 ">
            <div>
              <div className="flex flex-col gap-3">
                <p className="w-[50%] leading-8 font-light text-3xl lg:text-4xl">
                  Mais de
                </p>
                <p className="font-extrabold text-6xl lg:text-7xl">
                  <NumberTicker
                    value={7}
                    className="font-extrabold text-6xl lg:text-7xl"
                  />{" "}
                  anos
                </p>

                <p className=" leading-8 font-light text-3xl  lg:text-4xl">
                  atuando no mercado de T.I
                </p>
              </div>

              <div className="flex gap-12 justify-center lg:justify-start">
                <span className=" nav-links text-black text-3xl font-semibold rounded-lg mt-8  cursor-pointer transition-all">
                  <Link
                    to="https://www.linkedin.com/in/vitor-limaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    LikedIn
                    <LinkedinLogo size={32} weight="fill" />
                  </Link>
                </span>
                <span className=" nav-links text-black text-3xl font-semibold rounded-lg mt-8  cursor-pointer transition-all">
                  <Link
                    to="https://github.com/vitorl1maa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    GitHub
                    <GithubLogo size={32} weight="fill" />
                  </Link>
                </span>
              </div>
            </div>

            <div className="lg:w-[50%] ">
              <p className=" text-xl text-black/80 leading-8 lg:mt-12">
                Atuando há mais de 7 anos na área de TI, nos últimos 3 anos me
                especializei como desenvolvedor, com foco em desenvolvimento web
                e mobile. Tenho experiência em diversos tipos e níveis de
                projetos, ampliando minhas habilidades em diferentes tecnologias
                e desafios.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade direction="down" className="z-50">
        <div className="flex flex-col justify-start items-start lg:ml-80 mt-20 lg:mt-32 ">
          <h3 className="text-left text-4xl font-light">
            Algumas das tecnologias que trabalho atualmente
            <span className="text-orange-600">:</span>
          </h3>
          <div className=" flex flex-wrap gap-5 mt-8 w-  lg:w-full">
            <TooltipDefault
              icon="devicon:javascript"
              width={60}
              height={60}
              tooltip="JavaScript"
            />
            <TooltipDefault
              icon="devicon:typescript"
              width={60}
              height={60}
              tooltip="TypeScript"
            />
            <TooltipDefault
              icon="logos:nodejs"
              width={80}
              height={80}
              tooltip="Node.js"
            />
            <TooltipDefault
              icon="devicon:react"
              width={70}
              height={70}
              tooltip="React"
            />
            <TooltipDefault
              icon="devicon:reactnative-wordmark"
              width={80}
              height={80}
              tooltip="React Native"
            />
            <TooltipDefault
              icon="devicon:angular"
              width={60}
              height={60}
              tooltip="Angular"
            />
            <TooltipDefault
              icon="logos:nextjs-icon"
              width={60}
              height={60}
              tooltip="Next.js"
            />
            <TooltipDefault
              icon="devicon:postgresql"
              width={60}
              height={60}
              tooltip="PostgreSQL"
            />
            <TooltipDefault
              icon="logos:mysql"
              width={60}
              height={60}
              tooltip="MySQL"
            />
            <TooltipDefault
              icon="devicon:figma"
              width={60}
              height={60}
              tooltip="Figma"
            />
            <TooltipDefault
              icon="devicon:tailwindcss"
              width={60}
              height={60}
              tooltip="Tailwind CSS"
            />
            <TooltipDefault
              icon="vscode-icons:file-type-styled"
              width={60}
              height={60}
              tooltip="Styled Components"
            />
            {/* <TooltipDefault icon="fa-brands:wordpress" width={60} height={60} tooltip="WordPress" style={{ color: "#1d49e2" }} /> */}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
