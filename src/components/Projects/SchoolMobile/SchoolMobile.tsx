import schoolMobileImage from "@/assets/img_3screens.png";
import logoSchoolMobile from "@/assets/logo-school.png";
import { ArrowLeft } from "@phosphor-icons/react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function SchoolMobile() {
  return (
    <section className="w-full h-full lg:h-screen flex items-center justify-center flex-col  mt-[30%]  lg:mt-[20%] ">
      <Zoom delay={150} duration={800}>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={logoSchoolMobile}
              alt="logo school mobile"
              className="w-80"
            />

            <p className=" text-base lg:text-xl text-black/80  leading-8 mt-16 lg:w-[85%] text-justify lg:text-left ">
              Aplicativo auxiliar ao Controle Escolar, criado com {""}
              <span className="text-orange-600">React Native </span>
              para que os responsáveis possam monitorar as tentativas de acesso
              ao ambiente escolar controlado. Por meio de uma interface
              agradável e intuitiva, os responsáveis podem acompanhar os alunos
              vinculados ao seu cadastro e receber notificações rápidas de
              acesso diretamente no smartphone.
            </p>

            <Link
              to="https://play.google.com/store/apps/details?id=br.com.schoolmobile.inspell&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-20 hover:text-orange-600">
                <ArrowLeft size={50} />
              </button>
            </Link>
          </div>

          <div className=" w-[90%] lg:w-[60%] flex items-center justify-center pt-32 lg:pt-20 relative">
            <img
              src={schoolMobileImage}
              alt="Apresentação School mobile"
              className="w-[100%] absolute "
            />
          </div>
        </div>
      </Zoom>
    </section>
  );
}

export default SchoolMobile;
