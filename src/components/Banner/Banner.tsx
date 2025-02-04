import Button from "@/shared-components/Button/Button";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <section className="w-full h-auto lg:h-screen flex lg:items-center  mt-32 lg:mt-[10%] ">
      <div className="w-full lg:w-[80%]">
        <Fade direction="down">
          <div>
            <h1 className="font-light lg:text-4xl">Olá, me chamo Vitor!</h1>
            <p className="font-extrabold text-4xl lg:text-8xl mt-3 leading-10">
              <span className="text-gray-400">Sou um programador</span>{" "}
              apaixonado por tecnologia e desenvolvimento de softwares
              <span className="text-orange-600">.</span>
            </p>
          </div>
          <Link
            to="https://wa.me/qr/F64BKBUH6NCJA1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button />
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Banner;
