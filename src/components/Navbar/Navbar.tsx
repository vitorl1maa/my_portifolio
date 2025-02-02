function Navbar() {
  const handlerClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <nav className="flex justify-between">
        <p className="font-extrabold text-2xl">
          <span className="text-gray-400">Vitor</span> Lima
          <span className="text-orange-600">.</span>
        </p>
        <ul className="flex gap-5 font-extrabold text-xl">
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
