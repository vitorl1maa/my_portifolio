import { House, PanelTop, SendHorizontal, User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="bg-background w-full h-16 rounded-xl shadow-md">
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

        <Button variant="default" className="hover:bg-black/60">
          Contate-me <SendHorizontal size={15} />
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
