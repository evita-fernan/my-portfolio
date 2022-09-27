import React, { useState } from "react";
import Button from "./Button";
import profile from "../assets/profile2.svg"

const Navbar = () => {
  const options = [
    { name: "Home", link: "/" },
    { name: "¿Quién soy?", link: "/" },
    { name: "Projectos", link: "/" },
    { name: "Tecnologías", link: "/" },
    // { name: "Contáctame", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md fixed top-0 left-0 bg-black">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-[color:white]">
          <img src={profile} alt="my profile" className="h-20 pl-4 mx-auto hover:h-24"></img>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon className="text-white" name={open ? "close-outline" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex justify-center text-center p-4 md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          {options.map((option) => (
            <li key={option.name} className="md:ml-8 text-lg lg:text-2xl md:my-0 my-7">
              <a
                href={option.link}
                className="text-[color:white] hover:opacity-70 duration-500"
              >
                {option.name}
              </a>
            </li>
          ))}
          <Button>Contáctame</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
