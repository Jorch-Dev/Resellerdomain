import React, { Fragment, useState } from "react";
import "../assets/scss/app.css";
import servicio from "../services/buscadorDominios";
import correcto from "../assets/icons/correcto.svg";
import carrito from "../assets/icons/carrito.svg";

export default function Planes() {
  const [dominio, setDominio] = useState("");
  const [resultado, setResultado] = useState(false);
  const [extenciones, setextEnciones] = useState([]);

  const obtenerDominio = (e) => {
    const domini = e.target.value;
    setDominio(domini);
    localStorage.setItem("Dominio", dominio);
  };

  const obtienebusqueda = async () => {
    var objBuscador = {
      title: dominio,
      tdl: "com",
      country: "MX",
      sources: "keywordspin",
      waitMs: "1000",
    };

    await servicio(objBuscador);
  };

  const obtenerExtencion = (e) => {
    let extencion = e.target.value;
    console.log(extencion);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="divArmador">
          <div className="divDivisor">
            <p className="h1" style={{ textAlign: "center", color: "#fc7700" }}>
              Busqueda de dominios
            </p>
          </div>
        </div>
        <div id="divBuscador">
          <p style={{ textAlign: "center", color: "#1946bb" }}>
            Contrata ahora un dominio y haz crecer tu negocio!!!
          </p>
          <button className="btn" onClick={(e) => obtenerExtencion(e)}>
            <span>
              <img src={carrito} width="30px" height="30px" />
            </span>
          </button>
          <div className="container">
            <div className="divArmador">
              <div className="divDivisor2" style={{ textAlign: "right" }}>
                <label style={{ color: "#fc7700" }}>
                  <h1>WWW.</h1>
                </label>
              </div>
              <div className="divDivisor6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Verifique la disponibilidad de su dominio!"
                  style={{ border: "2px solid #1946bb" }}
                  onChange={(e) => obtenerDominio(e)}
                />
              </div>
              <div className="divDivisor3">
                <button
                  className="btn btn-block"
                  onClick={() => obtienebusqueda()}
                >
                  Verificar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="divRadio">
          {/* {resultado ? armaTabla() : <div></div>} */}
          <div className="divTabla" id="resultado"></div>
          <table className="colorTable">
            <tbody>
              <tr>
                <td>
                  <h3>rosa.com</h3>
                </td>
                <td>
                  <button className="btn" onClick={(e) => obtenerExtencion(e)}>
                    <span>
                      <img src={correcto} width="30px" height="30px" />
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>rosa.com.mx</h3>
                </td>
                <td>
                  <button className="btn" onClick={(e) => obtenerExtencion(e)}>
                    <span>
                      <img src={correcto} width="30px" height="30px" />
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>rosa.net</h3>
                </td>
                <td>
                  <button className="btn" onClick={(e) => obtenerExtencion(e)}>
                    <span>
                      <img src={correcto} width="30px" height="30px" />
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>rosa.live</h3>
                </td>
                <td>
                  <button className="btn" onClick={(e) => obtenerExtencion(e)}>
                    <span>
                      <img src={correcto} width="30px" height="30px" />
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
