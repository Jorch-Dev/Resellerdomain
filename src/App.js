import React, { Fragment } from "react";
import Planes from "./components/planes";
import "./assets/scss/app.css";

function App() {
  return (
    <Fragment>
      <div className="divbar">
        <div className="container">
          <h1 style={{color:'#fff'}}>ROCA</h1>
        </div>
      </div>
        <Planes />
    </Fragment>
  );
}

export default App;
