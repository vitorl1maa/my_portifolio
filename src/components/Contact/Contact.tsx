import React, { useState } from "react";
import avatarImage from "@/assets/avatar.jpeg";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Zoom } from "react-awesome-reveal";

function Contact() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "vitornascimento923@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar", err);
    }
  };

  return (
    <Zoom>
      <section
        className="w-full h-screen flex items-center justify-center mt-[5%] "
        id="contact"
      >
        <div className="relative flex h-[800px] w-full items-center justify-center overflow-hidden  bg-background ">
          <div className="w-full flex flex-col items-center mb-24">
            <h1 className="text-5xl font-extrabold mb-12 w-[55%] text-center mt-20 ">
              Me mande um <span className="text-gray-400"> e-mail</span>
            </h1>

            <div className="flex gap-8 bg-gray-100 px-5 py-2 rounded-3xl border shadow-md hover:border-2 hover:border-orange-600 z-30">
              <img
                src={avatarImage}
                alt="avatar image"
                className="w-20 rounded-full"
              />

              <button
                className="text-3xl font-normal"
                onClick={copyToClipboard}
              >
                {copied ? "E-mail copiado!" : "vitornascimento923@gmail.com"}
              </button>
            </div>
          </div>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={2}
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
        </div>
      </section>
    </Zoom>
  );
}

export default Contact;
