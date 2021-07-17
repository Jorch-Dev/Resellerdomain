import React, { Fragment } from "react";
import carrito from "../assets/icons/carrito.svg";
import { Link } from "react-router-dom";
import { Dominios } from "../redux/domSlice";
import { useDispatch } from "react-redux";

export function Car({extenciones}) {
  const dispatch = useDispatch();
  
  const llenaStore = () => {
    dispatch(Dominios({ extenciones }));
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <Link className="nav-link" to={`/shoppingCar`} >
          <button className="btn btn-block btn-info btn-lg" onClick={() => llenaStore()}>
            <span>
              <img src={carrito} width="20px" height="20px" />
              { extenciones.length === 0 ? (<span>0</span>) : (<span>{extenciones.length}</span>)}
            </span>
          </button>
          </Link>
          <br />
        </div>
      </div>
    </Fragment>
  );
}
