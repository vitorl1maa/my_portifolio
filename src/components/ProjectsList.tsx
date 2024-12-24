"use client";

import { Circle } from "lucide-react";
import WordRotate from "./ui/word-rotate";
import { projectsList } from "@/mocks/projects";
import Image from "next/image";

const ProjectsList = () => {
  return (
    <section className="bg-background mt-20 h-full rounded-md mx-2 mb-2 lg:px-36 lg:py-16">
      <div>
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <Circle size={8} fill="#d5d5d4" stroke="#d5d5d4" /> Projetos
        </h1>
      </div>

      <div>
        <div className="mt-20 flex justify-center items-center">
          <h2 className="text-center text-5xl font-bold">
            Seus planos ganham
            <WordRotate
              className="text-5xl font-bold text-[#61c486] dark:text-white"
              words={["vida", "comigo"]}
            />
          </h2>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-4 mt-20">
            {projectsList.map((project) => (
              <div key={project.id}>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                {/* <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
