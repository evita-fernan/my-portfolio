import React from "react";
import github from "../assets/icons/gitHub.svg";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.svg";

const Footer = () => {
  const icons = [
    {
      id: 1,
      name: "github",
      img: github,
      link: "https://github.com/evita-fernan",
    },
    {
      id: 2,
      name: "linkedin",
      img: linkedin,
      link: "https://www.linkedin.com/in/evita-fernan/",
    },
    {
      id: 3,
      name: "mail",
      img: mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fernandez.eva.tdf@gmail.com",
    },
  ];

  return (
    <div className="bg-black mx-auto w-full h-full">
      <div className="flex flex-row justify-center items-center p-0 sm:p-4 w-full">
        {icons.map(({ id, name, img, link }) => (
          <div key={id}>
            <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="images" className="px-3 py-3 hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)] rounded-full w-16 sm:w-20"></img>
            </a>
          </div>
        ))}
      </div>
      <div className="text-white text-center text-xs sm:text-base cursor-default pb-4 sm:pb-2">
        © Sitio web desarrollado por Evangelina M. Fernández
      </div>
    </div>
  );
};

export default Footer;
