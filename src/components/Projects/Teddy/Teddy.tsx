import { ArrowLeft } from '@phosphor-icons/react'
import { Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import teddyImage from '@/assets/teddy-page.png'
import logoTeddy from '@/assets/teddy-logo.png'

const Teddy = () => {
  return (
    <section className="w-full h-full lg:h-screen flex items-center justify-center flex-col mt-[70%]  lg:mt-[20%] ">
    <Zoom delay={150} duration={800}>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-32">

        <div className="lg:w-1/2 relative">
          <img
            src={logoTeddy}
            alt=""
            className="w-40 absolute  grayscale brightness-0"
          />

          <p className=" text-base lg:text-xl text-black/80  leading-8 mt-40 lg:w-[85%] text-left">
          Teddy Open Finance é uma fintech brasileira que fornece infraestrutura tecnológica para o setor financeiro, conectando bancos, fintechs e agentes de crédito por meio de uma plataforma completa de originação e distribuição de produtos financeiros. Atuo na equipe de desenvolvimento, contribuindo para a criação e evolução de nossos produtos utilizando principalmente <span className="text-orange-600">Angular</span>, <span className="text-orange-600">React</span>, <span className="text-orange-600">TypeScript</span>.
          </p>

          <Link
            to="https://teddydigital.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-20 hover:text-orange-600">
              <ArrowLeft size={50} />
            </button>
          </Link>
        </div>

        <div className="lg:w-[60%] bg-gray-100 p-5 rounded-3xl border shadow-md">
          <img
            src={teddyImage}
            alt="Apresentação Teddy Open Finance"
            className="rounded-2xl h-full"
          />
        </div>
      </div>
    </Zoom>
  </section>
  )
}

export default Teddy