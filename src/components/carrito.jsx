import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import "../assets/scss/app.css";
import carrito from "../assets/icons/carrito.svg";

export const Carrito = () => {
    const [carMarket, setCarMarket] = useState([]);
  return (
    <Fragment>
      <div className="container">
        <div className="divArmador">
          <button className="btn btn-block">
            <span>
              <img src={carrito} width="20px" height="20px" />
            </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

// const stateProps = state => ({
//     dominios: state.dominios
// })

// const dispatchProps = dispatch => ({})

// export default connect(stateProps, dispatchProps)(Carrito)
