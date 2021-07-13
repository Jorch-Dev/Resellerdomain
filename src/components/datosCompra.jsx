import React, { Fragment } from "react";
import "../assets/scss/app.css";

export const DatosCompra = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="divDivisor12">
          <h1>Compra de dominio</h1>
          {/* <nav
            style="--bs-breadcrumb-divider: '>';"
            aria-label="breadcrumb"
          > */}
            {/* <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol> */}
          {/* </nav> */}
        </div>
        <div className="divArmador"></div>
        <div id="divInformacion"></div>
      </div>
    </Fragment>
  );
};
