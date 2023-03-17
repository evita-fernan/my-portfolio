import React, {useState } from "react";
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
    const formData = { ...data };
    const response = await axios.post(action, formData);
    if (response.data.ok && formData.name && formData.email && formData.message) {
      Swal.fire({
        title: "¡Muchas gracias por contactarte!",
        text: "En breve te responderé.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
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
      });
    }
  };

  return (
    <div className="bg-black w-full mx-auto px-4 py-10" name="contactMe">
      <div className="flex justify-center">
        <img
          className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-bounce lg:py-8 py-4 lg:px-8 px-4"
          src={downSmall}
          alt=""
        ></img>
      </div>
      <div className="max-w-screen-xl items-center justify-center mx-auto">
        <h1 className="py-12 cursor-default">Contáctame</h1>
        <p className="text-white sm:text-2xl text-base text-center cursor-default">
          Puedes estar en contacto conmigo completando el siguiente formulario,
          a través de linkedIn o por correo electrónico
        </p>
        <div className="flex justify-center items-center py-8">
          <form
            className="flex flex-col w-full bg-gray-800 md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
              className="text-white border-2 bg-transparent rounded-md p-4 mb-2 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Ingresa tu correo electrónico"
              onChange={handleChange}
              className="text-white border-2 bg-transparent rounded-md p-4 mb-2 focus:outline-none focus:border-purple-500 focus:invalid:border-red-500"
            />
            <textarea
              name="message"
              value={data.message}
              rows="10"
              placeholder="Hola Evita..."
              onChange={handleChange}
              className="text-white border-2 bg-transparent rounded-md p-4 mb-2 focus:outline-none focus:border-pink-500"
            />
            <div className="flex flex-col justify-center bg-black items-center py-2">
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
