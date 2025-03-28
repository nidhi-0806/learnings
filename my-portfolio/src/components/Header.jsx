import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
