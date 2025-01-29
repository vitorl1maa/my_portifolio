import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <p className="font-extrabold text-2xl">
          <span className="text-gray-400">Vitor</span> Lima.
        </p>
        <ul className="flex gap-5 font-extrabold text-xl">
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Carreira</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
