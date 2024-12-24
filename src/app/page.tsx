import Navbar from "@/components/Navbar";
import { Circle, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import avatar from "@/images/avatar.jpeg";
import ProjectsList from "@/components/ProjectsList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-wrapper max-h-f">
      <main className="px-20 py-8 h-full">
        <Navbar />

        <div className="bg-background mt-8 w-full h-full rounded-xl shadow-md ">
          <div className="p-8 lg:px-36 lg:py-16">
            <section>
              <div className="flex justify-between">
                <h1 className="text-xl font-medium flex items-center gap-2">
                  {" "}
                  <Circle size={8} fill="#d5d5d4" stroke="#d5d5d4" /> Software
                  Developer
                </h1>
                <div className="flex items-center gap-2 justify-center rounded-full bg-[#d8f9e1] text-[#288341] w-32 ">
                  {" "}
                  <Circle
                    size={8}
                    fill="#61c486"
                    stroke="#61c486"
                    className="animate-pulse"
                  />{" "}
                  Disponível
                </div>
              </div>
            </section>

            <section className="w-full mt-20 flex justify-between items-center">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold">Olá meu nome é Vitor!</h2>

                <p className="mt-5 text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  quasi quos, quae molestias, corporis incidunt ratione officia
                  similique, maxime ad fuga minima placeat inventore? Veritatis
                  esse repellat vitae ad iusto.
                </p>

                <div className="flex gap-3 mt-8">
                  <Button className="hover:bg-black/60" variant="default">
                    LikedIn <Linkedin size={16} />
                  </Button>
                  <Button className="hover:bg-black/60" variant="default">
                    GitHub <Github size={16} />
                  </Button>
                </div>
              </div>

              <div className="border border-elements p-2 rounded-full">
                <Image
                  src={avatar}
                  width={300}
                  height={300}
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
            </section>
          </div>

          <ProjectsList />
        </div>
      </main>
    </div>
  );
}
