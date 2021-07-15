import React, { Fragment } from "react";
import { Buscador } from "./components/buscador";
import { DatosCompra } from "./components/datosCompra";
import { NavBar } from "./components/navBar";
import { ShoppingCart } from "./components/shoppingCart";
import { Pago } from "./components/pago";
import { Resultados } from "./components/resultados"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Buscador />
          </Route>
          <Route path="/resultados">
            <Resultados />
          </Route>
          <Route path="/shoppingCar">
            <ShoppingCart />
          </Route>
          <Route path="/pago">
            <Pago />
          </Route>
          <Route path="/datosCompra">
            <DatosCompra />
          </Route>
        </Switch>
      </Router>

      
    </Fragment>
  );
}

export default App;
