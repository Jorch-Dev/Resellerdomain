import React from "react";
import "../assets/scss/app.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="divbar navbar-expand-lg">
        <div className="container">
          <h2 style={{ color: "#fff" }}>RocaFunnels</h2>
          <div className="nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/resultados">
              Resultados de la busqueda
            </Link>
            <Link className="nav-link" to="/shoppingCar">
              Rocky Car
            </Link>
            <Link className="nav-link" to="/pago">
              Pago
            </Link>
            <Link className="nav-link" to="/datosCompra">
              DatosCompra
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
