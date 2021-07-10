import React, { Fragment } from "react";
import Planes from "./components/planes";
import "./assets/scss/app.css";

function App() {
  return (
    <Fragment>
      <div className="divbar">
        <div className="container">
          <h2 style={{color:'#fff'}}>RocaFunnels</h2>
        </div>
      </div>
        <Planes />
    </Fragment>
  );
}

export default App;
