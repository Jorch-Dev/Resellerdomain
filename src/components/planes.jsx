import React, { Fragment } from "react";
import "../assets/scss/app.css";

export default function Planes() {
  return (
    <Fragment>
      <div className="container">
        <hr />
        <div className="divArmador">
          <div className="divDivisor4">
          </div>
          <div className="divDivisor5">
            <p className="h2" style={{ color: "#fc7700" }}>
              Busqueda de dominios
            </p>
          </div>
          <div className="divDivisor2">
          </div>
        </div>
        <hr />
        <div id="divBuscador">
          <div className="container">
            <div className="divArmador">
              <div className="divDivisor2">
                <label>
                  <h1 style={{ color: "#fc7700", paddingLeft: "70%" }}>WWW.</h1>
                </label>
              </div>
              <div className="divDivisor5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Verifique la disponibilidad de su dominio!"
                  style={{border: "2px solid #1946bb"}}
                />
              </div>
              <div className="divDivisor1">
                <select className="form-control" style={{height: "65%"}}>
                  <option value="volvo">.com</option>
                  <option value="saab">.com.mx</option>
                  <option value="mercedes">.net</option>
                  <option value="audi">.gob</option>
                </select>
              </div>
              <div className="divDivisor2">
                <button className="btn btn-block">Verificar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="divRadio">
        </div>
      </div>
    </Fragment>
  );
}
