import React, { Fragment, useState } from "react";
import { Carrito } from "./carrito";

export const ShoppingCart = () => {
  const [subTotal, setSubTotal] = useState(null)

const actualizaSubTotal = (e) => {
  let ano = e.target.value;
  console.log(ano)
  const total = 179.90
  let precio = 0
  if (ano == 1) {
    precio = total
  }
  if (ano == 2) {
    precio = total * ano
  }
  if (ano == 3) {
    precio = total * ano
  }
  setSubTotal(precio)
}

  return (
    <Fragment>
      <div className="shopping-cart dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="block-heading">
                <h2> Rocky Car</h2>
                <p style={{ color: "#fc7700" }}>
                  Escoje el año de contrato del dominio y procede al pago, dar clic en Verificar
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Carrito 
              subtotal={subTotal != null ?
                ("$" + subTotal) : ("$179.9")}
              />
            </div>
          </div>
          </div>
          <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  <div className="product">
                    <div className="info">
                      <div className="product-details">
                        <div className="row justify-content-md-center">
                          <div className="col-md-4 product-detail">
                            <h5>Product</h5>
                            <div className="product-info">
                              <p>
                                <h3>rosa.com</h3>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4 product-detail">
                            <h5>Product</h5>
                            <div className="product-info">
                              <b>Descripción</b>
                              <p>dominio único</p>
                              <b>Total:</b>
                              <p>$179.90</p>
                            </div>
                          </div>
                          <div className="col-md-3 product-detail">
                            <label for="quantity">
                              <h5>Quantity</h5>
                            </label>
                            <select
                              name="quantity"
                              id="quantity"
                              className="form-control"
                              onChange={ (e) => actualizaSubTotal(e)}
                            >
                              <option value="1">1 año</option>
                              <option value="2">2 años</option>
                              <option value="3">3 años</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="lateral">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          

      </div>
    </Fragment>
  );
};
