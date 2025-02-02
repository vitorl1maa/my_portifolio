import Button from "@/shared-components/Button/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center mt-[15%] ">
      <div className="w-[80%]">
        <div>
          <h1 className="font-light text-4xl">Olá, me chamo Vitor!</h1>
          <p className="font-extrabold text-8xl mt-5 leading-none">
            <span className="text-gray-400">Sou um programador</span> apaixonado
            por tecnologia e desenvolvimento de softwares
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
      </div>
    </section>
  );
};

export default Banner;
