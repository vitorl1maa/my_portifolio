import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <p className="font-extrabold text-2xl">
          <span className="text-gray-400">Vitor</span> Lima
          <span className="text-orange-600">.</span>
        </p>
        <ul className="flex gap-5 font-extrabold text-xl">
          <li className="nav-links">
            <Link to="#sobre">Sobre</Link>
          </li>
          <li className="nav-links">
            <Link to="#projetos">Projetos</Link>
          </li>
          <li className="nav-links">
            <Link to="#contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
