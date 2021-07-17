import React, { Fragment, useState } from "react";
import { Car } from "./car";
import correcto from "../assets/icons/correcto.svg";
import "../assets/scss/app.css";

export const Resultados = () => {
  
  const [dominios, setDominios] = useState([
    { id: 1, nombre: "rosa.com", precio: 129 },
    { id: 2, nombre: "rosa.com.mx", precio: 250 },
    { id: 3, nombre: "rosa.net", precio: 120 },
    { id: 4, nombre: "rosa.live", precio: 172 },
    { id: 5, nombre: "rosa.are", precio: 100 },
    { id: 6, nombre: "rosa.uno", precio: 300 },
    { id: 7, nombre: "rosa.org", precio: 350 },
    { id: 8, nombre: "rosacompany.gob", precio: 500 },
    { id: 9, nombre: "rosa.blog", precio: 250 },
    { id: 10, nombre: "rosa.start", precio: 200 },
  ]);
  const [extenciones, setExtenciones] = useState([]);

  const obtenerExtencion = (id) => {
    let element = document.getElementById(id);
    document.getElementById(`boton${id}`).disabled = true;
    element.style.color = "#fc7700";

    const nombreDominio = dominios.filter((dominio) => dominio.id == id);
    setExtenciones([...extenciones, nombreDominio]);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="divResultados">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <Car extenciones={extenciones} />
            </div>
            <div className="col-md-12">
              <table className="colorTable">
                <tbody>
                  {dominios.map((i) => (
                    <tr id={i.id} key={i.id}>
                      <td>
                        <h4>{i.nombre}</h4>
                      </td>
                      <td>
                        <button
                          id={`boton${i.id}`}
                          className="btn btn-info"
                          onClick={() => obtenerExtencion(`${i.id}`)}
                        >
                          <span>
                            <img src={correcto} width="25px" height="25px" />
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
