import React from "react";
import headerImg from "../assets/header.jpeg";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="bg-black w-full mx-auto px-4 py-12">
      <div className="top-[110px] max-w-screen-xl h-full flex flex-col items-center justify-center mx-auto py-6">
        <img className="object-cove h-full w-full" src={headerImg} alt="code" />
      </div>
      <div className="bg-black text-white text-3xl lg:text-5xl md:flex justify-center text-center md:items-center py-8 md:py-8 px-7 md:px-6 cursor-default">
        <Typewriter
          options={{
            strings: [
              "Evangelina M. Fernández",
              "Desarrolladora Back-End",
              "Desarrolladora Front-End",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
