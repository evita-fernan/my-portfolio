import React, { Fragment, useCallback, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import downSmall from "../assets/downSmall.png";

const ContactMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const action = `https://formspree.io/f/${process.env.REACT_APP_CODE}`;
    const response = await axios.post(action, { data });
    if (response.ok) {
      Swal.fire({
        title: "¡Muchas gracias por contactarte!",
        text: "En breve te responderé.",
        icon: "success",
        confirmButtonText: "Aceptar",
      })
      setData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      Swal.fire({
        title: "¡Completa todos los campos!",
        text: "Si no indicas tus datos, no podré contactarte",
        icon: "error",
        confirmButtonText: "Aceptar",
      })
    };
  };

  return (
    <div className="bg-black max-w-[1240] mx-auto px-4" name="contactMe">
      <div className="flex justify-center py-6">
        <img
          className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce lg:py-8 py-4 lg:px-8 px-4"
          src={downSmall}
        ></img>
      </div>
      <div className="max-w-screen-2xl items-center justify-center mx-auto">
        <h1 className="py-12 cursor-default">Contáctame</h1>
        <p className="text-white sm:text-2xl text-lg text-center cursor-default">
          Puedes estar en contacto conmigo completando el siguiente formulario, a través de linkedIn o por correo electrónico
        </p>
        <div className="flex justify-center items-center py-8">
          <form
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
              className="text-white border-2 bg-transparent rounded-md p-4 mb-2 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="Ingresa tu correo electrónico"
              onChange={handleChange}
              className="text-white border-2 bg-transparent rounded-md p-4 mb-2 focus:outline-none"
            />
            <textarea
              name="message"
              value={data.message}
              rows="10"
              placeholder="Hola Evita..."
              onChange={handleChange}
              className="text-white border-2 bg-transparent rounded-md p-4 mb-2 focus:outline-none"
            />
            <div className="flex flex-col justify-center items-center py-2">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[color:white] text-lg lg:text-2xl py-2 px-6 rounded md:ml-8 hover:bg-secondary duration-500">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
