import React, { Fragment, useState } from "react";
import "../assets/scss/app.css";
import correcto from "../assets/icons/correcto.svg";

export const Resultados = () => {
    const [extenciones, setExtenciones] = useState([]);

    const obtenerExtencion = name => {
        let domini = name;
        setExtenciones(domini);
        const extension = extenciones.filter(ex => ex.nombre)
        
      };
  return (
    <Fragment>
      <div className="container">
        <div className="divArmador">
          <div id="divResultados">
            {/* {resultado ? armaTabla() : <div></div>} */}
            <div className="divTabla" id="resultado"></div>
            <table className="colorTable">
              <tbody>
                <tr>
                  <td>
                    <h4>rosa.com</h4>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => obtenerExtencion("rosa.com")}
                    >
                      <span>
                        <img src={correcto} width="25px" height="25px" />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>rosa.com.mx</h4>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => obtenerExtencion("rosa.com.mx")}
                    >
                      <span>
                        <img src={correcto} width="25px" height="25px" />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>rosa.net</h4>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => obtenerExtencion("rosa.net")}
                    >
                      <span>
                        <img src={correcto} width="25px" height="25px" />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>rosa.live</h4>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => obtenerExtencion("rosa.live")}
                    >
                      <span>
                        <img src={correcto} width="25px" height="25px" />
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
