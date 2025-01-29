import profileImg from "@/assets/profile.jpg";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { NumberTicker } from "../ui/number-ticker";

const About = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center mt-[15%]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold mb-20 w-[55%] text-center ">
          Desenvolvo aplicações <span className="text-gray-400">web</span> e
          <span className="text-gray-400"> mobile </span> rápidas, intuitivas e
          fáceis de usar
        </h1>

        <div className="w-[900px]">
          <img
            src={profileImg}
            alt="foto paletra sobre tecnologia"
            className="rounded-2xl "
          />
        </div>

        <div className="flex justify-center items-center w-[60%] gap-12 mt-16 ">
          <div>
            <div className="flex flex-col gap-3">
              <p className="w-[50%] leading-8 font-light text-4xl">Mais de</p>
              <p className="font-extrabold text-7xl">
                <NumberTicker value={7} className="font-extrabold text-7xl" />{" "}
                anos
              </p>

              <p className=" leading-8 font-light text-4xl">
                atuando no mercado de T.I
              </p>
            </div>

            <div className="flex gap-5">
              <button className="bg-black  text-white flex items-center justify-center gap-3 w-56 h-16 text-2xl font-semibold rounded-lg mt-8">
                LikedIn
                <LinkedinLogo size={32} weight="fill" />
              </button>
              <button className="bg-black text-white flex items-center justify-center gap-3 w-56 h-16 text-2xl font-semibold rounded-lg mt-8">
                GitHub
                <GithubLogo size={32} weight="fill" />
              </button>
            </div>
          </div>

          <div className="w-[50%] ">
            <p className=" text-xl  leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              labore nam explicabo est accusamus non pariatur quod excepturi
              sunt rem blanditiis id saepe officiis, recusandae, sint temporibus
              dolorum neque veritatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
