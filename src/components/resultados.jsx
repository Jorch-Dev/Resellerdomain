import React, { Fragment, useState } from "react";
import "../assets/scss/app.css";
import correcto from "../assets/icons/correcto.svg";
import carrito from "../assets/icons/carrito.svg";
import { Link } from "react-router-dom";

export const Resultados = () => {
  const [extenciones, setExtenciones] = useState([]);

  const obtenerExtencion = (name) => {
    let domini = name;
    setExtenciones(domini);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="divResultados">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <Link className="nav-link" to="/shoppingCar">
                <button className="btn btn-block btn-info btn-lg">
                  <span>
                    <img src={carrito} width="20px" height="20px" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="col-md-12">
              <table className="colorTable">
                <tbody>
                  <tr>
                    <td>
                      <h4>rosa.com</h4>
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
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
                        className="btn btn-info"
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
                        className="btn btn-info"
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
                        className="btn btn-info"
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
      </div>
    </Fragment>
  );
};
