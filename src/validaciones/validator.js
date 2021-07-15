import React from "react";

export const validaCampoVacio = (text) => {
  if (!text.trim()) {
    return "El campo no puede estar vacio";
  }
};

export const validaTexto = (texto) => {
  const expregUsr = /^[A-Z]+$/i;
  if (!expregUsr.test(texto)) {
    return "El campo solo acepta letras [a-z-A-Z]";
  }
};

export const validaPassword = (password) => {
  var expreg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_;$@$¡!%*¿?&#+<>/])[-_;A-Za-z\d$@$¡!%*¿?&#+<>/]{8}/;
  if (!expreg.test(password)) {
    return "La contraseña no tiene el formato correcto";
  }
};

export const validaEmail = (email) => {
  const regext =
    /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
  if (!regext.exec(email)) {
    return "El formato del correo electrónico es incorrecto";
  }
};

export const validaTelefono = (phone) => {
  if (phone.replace(/\D+/g, "").length !== 10) {
    return "El campo teléfono solo acepta 10 caracteres de tipo número";
  }
};
