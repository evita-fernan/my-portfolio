import React from "react";
import downSmall from "../assets/downSmall.png";
import bootstrap from "../assets/icons/bootstrap.png";
import css from "../assets/icons/css.png";
import materialui from "../assets/icons/materialui.svg";
import tailwind from "../assets/icons/tailwind.svg";
import js from "../assets/icons/js.svg";
import nodeJS from "../assets/icons/nodejs.svg";
import expressJS from "../assets/icons/expressjs.svg";
import jwt from "../assets/icons/jwt.svg";
import postgres from "../assets/icons/postgresql.svg";
import mongoDB from "../assets/icons/mongodb.png";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import git from "../assets/icons/git.png";
import postman from "../assets/icons/postman.svg";

const Technologies = () => {
  const techs = [
    { id: 1, name: "JavaScript", img: js },
    { id: 2, name: "Bootstrap", img: bootstrap },
    { id: 3, name: "CSS", img: css },
    { id: 4, name: "Material UI", img: materialui },
    { id: 5, name: "Tailwind", img: tailwind },
    { id: 6, name: "React", img: react },
    { id: 7, name: "Redux", img: redux },
    { id: 8, name: "Node JS", img: nodeJS },
    { id: 9, name: "Express JS", img: expressJS },
    { id: 10, name: "JWT", img: jwt },
    { id: 11, name: "Postgres SQL", img: postgres },
    { id: 12, name: "Mongo DB", img: mongoDB },
    { id: 13, name: "Postman", img: postman },
    { id: 14, name: "Git", img: git },
  ];
  return (
    <div
      className="bg-black w-full flex flex-col justify-center mx-auto px-4 py-10"
      name="technologies"
    >
      <div className="flex justify-center">
        <img
          className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce lg:py-8 py-4 lg:px-8 px-4"
          src={downSmall}
        ></img>
      </div>
      <h1 className="py-12 cursor-default">Tecnologías</h1>
      <div className="flex flex-col h-full items-center justify-center text-center">
        <p className="text-white sm:text-2xl text-lg cursor-default">
          Estas son las tecnologías, herramientas y lenguajes que utilizo, y que
          al día de hoy continuo aprendiendo para mejorar mi destreza en ellas
        </p>
      </div>
      <div className="max-w-screen-lg h-full flex flex-col items-center justify-center mx-auto w-full hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)]">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0 rounded-lg">
          {techs.map(({ id, name, img }) => (
            <div
              key={id}
              className="py-2 rounded-full px-2"
            >
              <div key={id}>
                <img src={img} className="w-16 sm:w-20 mx-auto"></img>
                <p className="text-white mt-4 cursor-default text-sm sm:text-base">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
