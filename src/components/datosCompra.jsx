import React, { Fragment } from "react";
import "../assets/scss/app.css";

export const DatosCompra = () => {
  return (
    <Fragment>
      <div id="divHeader">
        <div className="container">
          <h1>Compra de dominio</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Carrito</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Captura tus datos
            </li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div className="divArmador">
        <div id="divInformacion">
          <div className="divDivisor11">dede</div>
            <div className="divDivisor5">
              <label>Primer nombre:</label>
              <input
                id="name"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Segundo nombre:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Apellidos:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Telefono:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Email:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Fax:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Puesto:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
            <div className="divDivisor5">
              <label>Organización/Trabajo:</label>
              <input
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
              />
            </div>
        </div>
        </div>
        
      </div>
    </Fragment>
  );
};
