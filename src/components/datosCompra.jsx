import React, { Fragment, useState } from "react";
import { HeaderCompra } from "./headerCompra";
import {
  validaCampoVacio,
  validaTexto,
  validaPassword,
  validaEmail,
  validaTelefono,
} from "../validaciones/validator";
import "../assets/scss/app.css";

export const DatosCompra = () => {
  //#region usesState Datos
  const [nameFirts, setNameFirts] = useState("");
  const [nameMiddle, setNameMiddle] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [jopTitle, setJopTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [errores, setErrores] = useState(null);
  //#endregion

  const obtieneDatos = (e, id) => {
    switch (id) {
      case 0:
        setNameFirts(e.target.value);
        break;
      case 1:
        setNameMiddle(e.target.value);
        break;
      case 2:
        setNameLast(e.target.value);
        break;
      case 3:
        setPhone(e.target.value);
        break;
      case 4:
        setEmail(e.target.value);
        break;
      case 5:
        setFax(e.target.value);
        break;
      case 6:
        setCountry(e.target.value);
        break;
      case 7:
        setCountry(e.target.value);
        break;
      case 8:
        setPostalCode(e.target.value);
        break;
      case 9:
        setAddress(e.target.value);
        break;
      case 10:
        jopTitle(e.target.value);
        break;
      case 11:
        setOrganization(e.target.value);
        break;
    }
    console.log(nameFirts);
    console.log(nameMiddle);
    // if (!result.trim()) {
    //   setErrores(result)
    //   return
    // }
    // else
    // {
    //   result = validaTexto(name)
    //   if (!result.trim()) {
    //     setErrores(result)
    //     return
    //   }
    //   else{

    //   }
    // }
  };

  return (
    <Fragment>
      <HeaderCompra titulo="Compra de dominio" />
      <div className="container">
        <div id="divInformacion">
          <div className="container">
            <div class="row">
              <div class="col-md-12">
                <h3>Captura tus datos de compra</h3>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-4">
              <label>Primer nombre:</label>
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Ingrese su nombre"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 0);
                }}
                value={nameFirts}
              />
              {errores != null ? (
                <p style={{ color: "#fc7700" }} severity="error">
                  {errores}!
                </p>
              ) : (
                <></>
              )}
            </div>
            <div class="col-md-4">
              <label>Segundo nombre:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 1);
                }}
                value={nameMiddle}
              />
            </div>
            <div class="col-md-4">
              <label>Apellidos:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 2);
                }}
                value={nameLast}
              />
            </div>
            <div className="col-md-4">
              <label>Teléfono:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 3);
                }}
                value={phone}
              />
            </div>
            <div className="col-md-4">
              <label>Email:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 4);
                }}
                value={email}
              />
            </div>
            <div className="col-md-4">
              <label>Fax:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 5);
                }}
                value={fax}
              />
            </div>
            <div className="col-md-4">
              <label>Pais:</label>
              <select
                name="cars"
                id="cars"
                className="form-control"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 6);
                }}
                value={country}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Ciudad:</label>
              <select
                name="cars"
                id="cars"
                className="form-control"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 7);
                }}
                value={city}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Código Postal:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 8);
                }}
                value={postalCode}
              />
            </div>
            <div className="col-md-4">
              <label>Dirección:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 9);
                }}
                value={address}
              />
            </div>
            <div className="col-md-4">
              <label>Puesto:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 10);
                }}
                value={jopTitle}
              />
            </div>
            <div className="col-md-4">
              <label>Organización/Trabajo:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el dato"
                style={{ border: "2px solid #1946bb" }}
                onChange={(e) => {
                  obtieneDatos(e, 11);
                }}
                value={organization}
              />
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-block btn-info"
                onChange={(e) => {
                  obtieneDatos(e, 9);
                }}
                value={address}
              >
                otros datos
              </button>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                className="btn btn-block btn-info"
                onChange={(e) => {
                  obtieneDatos(e, 9);
                }}
                value={address}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      <HeaderCompra />
    </Fragment>
  );
};

{
  /* <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Carrito</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Captura tus datos
          </li>
        </ol>
      </div> */
}
