import React, { Fragment, useState } from "react";
import "../assets/scss/app.css";
import { suggest } from "../services/buscadorDominios";
import { Resultados } from "./resultados";

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
  };

  const obtienebusqueda = async () => {
    setErrores(null);
    if (!dominio.trim()) {
      setErrores("El campo DOMINIO no puede estar vacio");
      return;
    }

    var objBuscador = {
      title: dominio,
      tdl: "com,mx",
      country: "MX",
      sources: "keywordspin",
      waitMs: "1000",
    };

    await suggest(objBuscador);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="h1" style={{ textAlign: "center", color: "#fc7700" }}>
              Busqueda de dominios
            </p>
            <p style={{ textAlign: "center", color: "#1946bb" }}>
              Contrata ahora un dominio y haz crecer tu negocio!!!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h1 style={{ color: "#fc7700" }}>WWW.</h1>
          </div>
          <div className="col-md-6">
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
          <div className="col-md-2">
            <button
              className="btn btn-block btn-info"
              onClick={() => obtienebusqueda()}
            >
              Verificar
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
        <hr />
        <Resultados />
      </div>
    </Fragment>
  );
};
