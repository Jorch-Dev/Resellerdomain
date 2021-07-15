import React, { Fragment } from "react";
import "../assets/scss/app.css";

export const HeaderCompra = ({titulo}) => {
  return (
    <Fragment>
      <div id="divHeader">
        <div className="container">
          <h1>{ titulo }</h1>
        </div>
      </div>
    </Fragment>
  );
};
