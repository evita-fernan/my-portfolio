import React from "react";
import headerImg from "../assets/code3.jpeg";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div className="w-full top-[110px]">
        <img className="object-cove h-full w-full" src={headerImg} alt="code" />
      </div>
      <div className="bg-black text-white text-xl lg:text-4xl md:flex justify-center text-center md:items-center py-4 md:px-10 px-7">
        <Typewriter
          options={{
            strings: [
              "Evangelina Fernández",
              "Desarrolladora Back-End",
              "Desarrolladora Front-End",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default Header;
