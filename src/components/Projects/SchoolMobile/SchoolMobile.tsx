import schoolMobileImage from "@/assets/img_3screens.png";
import logoSchoolMobile from "@/assets/logo-school.png";
import { ArrowLeft } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function SchoolMobile() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col  mt-[20%] ">
      <Slide direction="left">
        <div className="flex gap-12 items-center">
          <div className="w-1/2">
            <img
              src={logoSchoolMobile}
              alt="logo school mobile"
              className="w-80"
            />

            <p className=" text-xl text-black/80  leading-8 mt-16 w-[85%] ">
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

          <div className="w-[60%] flex items-center justify-center pt-20 relative">
            <img
              src={schoolMobileImage}
              alt="Apresentação School mobile"
              className="w-[100%] absolute "
            />
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default SchoolMobile;
