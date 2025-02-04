import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handlerClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between items-center">
          <p className="font-extrabold lg:text-2xl">
            <span className="text-gray-400">Vitor</span> Lima
            <span className="text-orange-600">.</span>
          </p>

          <button
            className="block lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {openMenu ? <X size={28} /> : <List size={28} />}
          </button>
        </div>

        <ul
          className={`menu-mobile ${
            openMenu
              ? "opacity-100 top-12 z-10 h-[150px] bg-white"
              : "opacity-0 top-[-300px] z-[-1]"
          } lg:opacity-100 lg:relative lg:top-0 lg:z-auto lg:flex`}
        >
          <li className="nav-links cursor-pointer">
            <a onClick={() => handlerClick("sobre")}>Sobre</a>
          </li>
          <li className="nav-links cursor-pointer">
            <a onClick={() => handlerClick("projetos")}>Projetos</a>
          </li>
          <li className="nav-links cursor-pointer">
            <a onClick={() => handlerClick("contact")}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
