import React, { Fragment } from "react";
import { Buscador } from "./components/buscador";
import { DatosCompra } from "./components/datosCompra"
import { NavBar } from "./components/navBar"

function App() {
  return (
      <Fragment>
        <NavBar />
        <DatosCompra />
        {/* <Buscador /> */}
        <NavBar />
      </Fragment>
  );
}

export default App;
