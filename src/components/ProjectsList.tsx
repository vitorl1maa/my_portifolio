import { Circle } from "lucide-react";
import React from "react";

const ProjectsList = () => {
  return (
    <section className="bg-background mt-20 h-screen rounded-md mx-2 mb-2 lg:px-36 lg:py-16">
      <h1 className="text-xl font-medium flex items-center gap-2">
        {" "}
        <Circle size={8} fill="#d5d5d4" stroke="#d5d5d4" /> Projetos
      </h1>
    </section>
  );
};

export default ProjectsList;
