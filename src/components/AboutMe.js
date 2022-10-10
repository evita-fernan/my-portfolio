import React from "react";
import downSmall from "../assets/downSmall.png";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <div className="w-full mx-auto px-4 py-10 bg-black" name="aboutMe">
      <div className="flex justify-center">
        <img
          className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce lg:py-8 py-4 lg:px-8 px-4"
          src={downSmall}
        ></img>
      </div>
      <h1 className="py-12 cursor-default">¿Quién soy?</h1>
      <div className="max-w-screen-2xl h-full flex flex-col items-center justify-center mx-auto">
        <div className=" bg-gray-800 rounded-lg p-4 border-gray-700 justify-center text-gray-300 py-4 sm:p-8 text-center text-lg sm:text-2xl hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)]">
          <div className="space-y-2 cursor-default">
            <p>
              ¡Hola! ¿cómo estás? mi nombre es Evangelina y me gusta que me
              llamen Evita. Soy Desarrolladora Back-end y Front-end, y comencé a
              programar de forma autodidacta con mucho entusiasmo ya que vi en
              esta apasionante disciplina una forma de reinventarme como
              profesional.
            </p>
            <p>
              Ello, me llevó a tomar la decisión de realizar una formación
              intensiva en la cual aprendí las tecnologías que hoy domino. Sí
              queres conocer cuáles son, te invito a ingresar a la sección de{" "}
              <Link
                to="technologies"
                smooth={true}
                offset={-100}
                duration={1000}
                className="underline cursor-pointer decoration-double decoration-pink-500"
              >
                Tecnologías.
              </Link>
            </p>
          </div>
          <p className="py-4">
            Mi base como Ingeniera Química me permitió abordar la programación
            siendo persistente, paciente, metódica, resolutiva, entre otras
            herramientas que la carrera me proporcionó; mientras que mi
            experiencia laboral me brindó la posibilidad de liderar diferentes
            equipos de trabajo. Disfruto de trabajar en equipo porque considero
            que de esta forma se pueden lograr grandes cosas, y como dijo
            Ryunosuke Satoro, individualmente, somos una gota, juntos, somos un
            océano.{" "}
          </p>
          <p>
            Te invito a chequear mis{" "}
            <Link
                to="projects"
                smooth={true}
                offset={-100}
                duration={1000}
                className="underline cursor-pointer decoration-double decoration-pink-500"
              >
                Projectos.
              </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
