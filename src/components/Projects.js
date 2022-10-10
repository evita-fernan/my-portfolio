import React from "react";
import bierfass from "../assets/bierfass.png";
import miTurno from "../assets/miTurnomax.png";
import downSmall from "../assets/downSmall.png";
import gitHub from "../assets/icons/gitHub.svg";
import youTube from "../assets/icons/youTube.svg";

const Projects = () => {
  return (
    <div className="bg-black w-full mx-auto px-4 py-12" name="projects">
      <div className="flex justify-center py-6">
        <img
          className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce lg:py-8 py-4 lg:px-8 px-4"
          src={downSmall}
        ></img>
      </div>
      <div className="max-w-screen-2xl h-full flex flex-col items-center justify-center mx-auto w-full">
        <h1 className="py-12 cursor-default">Projectos</h1>
        <div className="grid grid-cols-2 gap-2 px-4">
          <div className="px-8 hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)] rounded">
            <img
              className="rounded-t-lg object-bottom py-6"
              src={bierfass}
              alt="image page bierfass"
            />
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
                creación de un perfil de cliente, selección de productos a
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
                >
                  <img src={gitHub} />
                </a>
              </div>
            </div>
          </div>
          <div className="px-8 hover:shadow-[0px_22px_70px_4px_rgb(236,72,153)] rounded">
            <a href="https://github.com/evita-fernan/bierfass">
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
                reservar un turno desde un perfil de usuario, confirmación de
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
                >
                  <img src={gitHub} />
                </a>
                <a href="https://youtu.be/d3Ftu_9RwU8" target="_blank">
                  <img src={youTube} />
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
