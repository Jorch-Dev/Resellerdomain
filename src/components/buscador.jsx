import React, { Fragment, useState } from "react";
import "../assets/scss/app.css";
import servicio from "../services/buscadorDominios";
import { Carrito } from "./carrito"
import { Resultados } from "./resultados"



export const Buscador = () => {
  const [dominio, setDominio] = useState("");
  const [resultado, setResultado] = useState(false);
  const [extenciones, setExtenciones] = useState([]);
  const [errores, setErrores] = useState(null);

  const obtenerDominio = (e) => {
    const domini = e.target.value;
    setErrores(null);
    if (!domini.trim()) {
      setErrores("El campo DOMINIO no puede estar vacio");
      return;
    }

    setDominio(domini);
    localStorage.setItem("Dominio", dominio);
  };

  const obtienebusqueda = async () => {
    setErrores(null);
    if (!dominio.trim()) {
      setErrores("El campo DOMINIO no puede estar vacio");
      return;
    }

    var objBuscador = {
      title: dominio,
      tdl: "com",
      country: "MX",
      sources: "keywordspin",
      waitMs: "1000",
    };

    await servicio(objBuscador);
  };

 

  return (
    <Fragment>
      <div className="container">
        <div className="divArmador">
          <div className="divDivisor12">
            <p className="h1" style={{ textAlign: "center", color: "#fc7700" }}>
              Busqueda de dominios
            </p>
            <p style={{ textAlign: "center", color: "#1946bb" }}>
              Contrata ahora un dominio y haz crecer tu negocio!!!
            </p>
          </div>
        </div>
        <div className="divArmador">
          <div className="divDivisor1">
            <label style={{ color: "#fc7700" }}>
              <h1>WWW.</h1>
            </label>
          </div>
          <div className="divDivisor6">
            <p>
              <input
                type="text"
                className="form-control"
                placeholder="Verifique la disponibilidad de su dominio!"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => obtenerDominio(e)}
              />
            </p>

            {errores != null ? (
              <div className="alert alert-warning">{errores}!</div>
            ) : (
              <></>
            )}
          </div>
          <div className="divDivisor2">
            <button className="btn btn-block" onClick={() => obtienebusqueda()}>
              Verificar
            </button>
          </div>
          <div className="divDivisor1">
            <Carrito extenciones={extenciones} />
          </div>
        </div>
        <hr />   
        <Resultados />   
      </div>
    </Fragment>
  );
};
