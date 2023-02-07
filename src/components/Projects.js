import React from "react";
import bierfass from "../assets/bierfass.png";
import miTurno from "../assets/miTurnomax.png";
import alkybank from "../assets/alkybank.jpeg"
import downSmall from "../assets/downSmall.png";
import gitHub from "../assets/icons/gitHub.svg";
import youTube from "../assets/icons/youTube.svg";

const Projects = () => {
  return (
    <div className="bg-black w-full mx-auto px-4 py-10" name="projects">
      <div className="flex justify-center">
        <img
          className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce lg:py-8 py-4 lg:px-8 px-4"
          src={downSmall}
        ></img>
      </div>
      <div className="max-w-screen-2xl h-full flex flex-col items-center justify-center mx-auto w-full">
        <h1 className="py-12 cursor-default">Proyectos</h1>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 px-0 sm:px-4">
          <div className="bg-gray-800 px-8 mx-auto hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)] rounded-lg">
            <a
              href="https://github.com/evita-fernan/bierfass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-t-lg object-bottom py-6"
                src={bierfass}
                alt="page bierfass"
              />
            </a>
            <h2 className="text-white cursor-default">
              "BIERFASS" E -COMMERCE SOBRE VENTAS DE CERVEZAS
            </h2>
            <div className="text-white p-4 text-center cursor-default">
              <p>
                Proyecto abordado entre cinco desarrolladores. En este proyecto
                trabajé en el Front - End.
              </p>
              <p className="underline decoration-double decoration-pink-500">
                Funcionalidades
              </p>
              <p>
                Creación de un perfil de cliente, selección de productos a
                adquirir, agregarlos a un carrito, completar el proceso de
                adquisición, envío de correo electrónico con el detalle de la
                orden de compra, calificación de los productos adquiridos y
                creación de perfil de administrador.
              </p>
              <p className="underline decoration-double decoration-pink-500">
                Tecnologías
              </p>
              <p>Node JS, Express, Sequelize, React, Bootstrap</p>

              <p className="underline decoration-double decoration-pink-500">
                Herramientas
              </p>
              <p>Postman, GIT, GITHub, Trello</p>
              <div className="flex flex-col justify-center items-center py-4">
                <a
                  href="https://github.com/evita-fernan/bierfass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHub} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 px-8 mx-auto hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)] rounded">
            <a
              href="https://github.com/evita-fernan/miTurno"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-t-lg object-bottom py-6"
                src={miTurno}
                alt="image page bierfass"
              />
            </a>
            <h2 className="text-white cursor-default">
              "MITURNO" - WEBAPP SOBRE RESERVA DE TURNOS
            </h2>
            <div className="text-white p-4 text-center">
              <p>
                Práctica Profesional en colaboración con la empresa{" "}
                <a
                  href="https://www.e-cruce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-double decoration-pink-500"
                >
                  Cruce
                </a>
                . En este proyecto trabajé en el Back - End.
              </p>

              <p className="underline decoration-double decoration-pink-500">
                Funcionalidades
              </p>
              <p>
                Reservar un turno desde un perfil de usuario, confirmación de
                asistencia desde un perfil operador, creación de sucursales y
                asignación de operadores desde un perfil de administrador, envío
                de correo electrónico de asistencia de olvido de contraseña y
                confirmación de reserva de turno exitosa.
              </p>
              <p className="underline decoration-double decoration-pink-500">
                Tecnologías
              </p>
              <p>Node JS, Express, MongoDB, JWT, React, Redux, Bootstrap</p>

              <p className="underline decoration-double decoration-pink-500">
                Herramientas
              </p>
              <p>Postman, MongoDB Atlas, GIT, GITHub, Atlassian Jira</p>
              <div className="flex flex-col sm:flex-row justify-center items-center p-2 sm:p-4 space-x-0 sm:space-x-8">
                <a
                  href="https://github.com/evita-fernan/miTurno"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHub} />
                </a>
                <a href="https://youtu.be/d3Ftu_9RwU8" target="_blank">
                  <img src={youTube} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 px-8 mx-auto hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)] rounded">
            <a href="https://github.com/ThiagoLopezA/Skill-Up-JS-Backend-02">
              <img
                className="rounded-t-lg object-bottom py-6"
                src={alkybank}
                alt="page alkybank"
              />
            </a>
            <h2 className="text-white cursor-default">
              "ALKYBANK" - WEBAPP BILLETERA VIRTUAL
            </h2>
            <div className="text-white p-4 text-center">
              <p>
                Proyecto de aceleración de Skill Up con{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.alkemy.org/"
                  className="underline decoration-double decoration-pink-500"
                >
                  Alkemy
                </a>
                . En este proyecto trabajé en el Back - End y Front - End.
              </p>

              <p className="underline decoration-double decoration-pink-500">
                Funcionalidades
              </p>
              <p>
                Billetera virtual que se puede integrar al homebanking del banco
                “Alkybank” para que sus clientes puedan realizar transacciones
                de una manera rápida, fluida y segura; pudiendo cargar saldo a
                su cuenta, transferir dinero a otra persona, ver sus movimientos
                y el balance entre sus ingresos y sus gastos, entre otras
                opciones.
              </p>
              <p className="underline decoration-double decoration-pink-500">
                Tecnologías
              </p>
              <p>
                Node JS, Express, MySQL, JWT, React, Redux, Bootstrap, Mocha,
                Chai
              </p>

              <p className="underline decoration-double decoration-pink-500">
                Herramientas
              </p>
              <p>Postman, MySQL, GIT, GITHub, GitFlow, Trello</p>
              <div className="flex flex-col sm:flex-row justify-center items-center p-2 sm:p-4 space-x-0 sm:space-x-8">
                <a
                  href="https://github.com/ThiagoLopezA/Skill-Up-JS-Backend-02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHub} alt="github" />
                </a>
                <a
                  href="https://github.com/ThiagoLopezA/Skill-Up-JS-Front-02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gitHub} alt="github" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=wVRouzIow8k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youTube} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
