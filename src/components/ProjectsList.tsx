"use client";

import Image from "next/image";
import SparklesText from "./ui/sparkles-text";
import mockup from "@/images/projects/mockup_onboarding.png";
import WordRotate from "./ui/word-rotate";

const ProjectsList = () => {
  return (
    <section className="bg-[#ffff]  mt-5 mb-2 lg:py-16 ">
      <div>
        {/* <h1 className="text-xl font-semibold flex items-center gap-2">
          <Circle size={8} fill="#d5d5d4" stroke="#d5d5d4" /> Projetos
        </h1> */}
      </div>

      <div className="h-full ">
        <div className="mt-20 flex justify-center items-center">
          <h2 className="text-center text-5xl font-bold flex gap-2">
            Dê vida aos seus projetos
          </h2>
        </div>

        <div className="flex justify-center items-center mt-20 ">
          <div className="relative flex justify-start">
            <p className="text-4xl font-bold absolute -right-60 top-32 w-[400px] ">
              Chegou a hora de <br /> criar seu primeiro
              <WordRotate
                className="text-4xl font-bold  dark:text-white text-blue-500"
                words={["Site", "Aplicativo", "Sistema"]}
              />
            </p>
          </div>
          <Image
            src={mockup}
            alt=""
            className="w-[65%] h-full object-contain "
          />

          <div className="relative">
            <p className="text-4xl font-bold absolute -right-72 -top-80  w-[400px]">
              Dando{" "}
              <SparklesText
                text="visibilidade"
                className="text-4xl text-purple-400"
              />{" "}
              ao seu negócio
            </p>
          </div>
        </div>
        <div>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            autem, possimus amet officia repellendus, neque modi inventore nisi
            voluptatum at quaerat quae veniam quod eaque libero a quis cum
            error.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
