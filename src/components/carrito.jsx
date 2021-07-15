import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom'
import "../assets/scss/app.css";

export const Carrito = ({ subtotal }) => {
  const [carMarket, setCarMarket] = useState([]);

  const llenarDatos = () => {};
  return (
    <Fragment>
      {/* Carrito */}
      <div class="summary">
        <div class="summary-item">
          <h5 style={{ textAlign: "center" }}>El subtotal ya incluye el IVA</h5>
        </div>
        <div class="summary-item">
          <label>Subtotal:</label>
          <span class="price">{subtotal}</span>
        </div>
        <Link to="/datosCompra">
          <button
            class="btn btn-primary btn-lg btn-block"
            id="checkout-btn"
          >
            Crear orden
          </button>
        </Link>
      </div>
      {/* EndCarrito */}
    </Fragment>
  );
};

// const stateProps = state => ({
//     dominios: state.dominios
// })

// const dispatchProps = dispatch => ({})

// export default connect(stateProps, dispatchProps)(Carrito)
