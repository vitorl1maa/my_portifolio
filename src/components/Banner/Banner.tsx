import Button from "@/shared-components/Button/Button";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const Banner = () => {
  return (
    <section className="w-full h-full lg:h-screen flex lg:items-center mt-12 lg:mt-[13%] ">
      <div className="w-full lg:w-[80%]">
        <Zoom delay={150} duration={800}>
          <div>
            <h1 className="font-light text-xl lg:text-4xl">
              Olá, me chamo Vitor!
            </h1>
            <p className="font-extrabold text-4xl lg:text-8xl mt-3 leading-10">
              <span className="text-gray-400">Sou um programador</span>{" "}
              apaixonado por tecnologia e desenvolvimento de softwares
              <span className="text-orange-600">.</span>
            </p>
          </div>
          <Link
            to="https://wa.me/5532984199503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button />
          </Link>
        </Zoom>
      </div>
    </section>
  );
};

export default Banner;
