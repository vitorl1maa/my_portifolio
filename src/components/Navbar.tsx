"use client";

import { House, PanelTop, SendHorizontal, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-foreground w-full h-16 rounded-xl shadow-md">
      <nav className="flex justify-between items-center px-8 lg:px-36 h-full">
        <ul className="flex gap-3">
          <li className="menu-buttons">
            <House className="text-textColor hover:text-black" />
          </li>
          <li className="menu-buttons">
            <User className="text-textColor hover:text-black" />
          </li>
          <li className="menu-buttons">
            <PanelTop className="text-textColor hover:text-black" />
          </li>
        </ul>

        <button className="cta-button font-medium flex items-center justify-center gap-2 hover:bg-black/70">
          Contate-me <SendHorizontal size={15} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
