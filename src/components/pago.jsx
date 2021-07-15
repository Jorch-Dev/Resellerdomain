import React, { Fragment } from "react";

export const Pago = () => {
  return (
    <Fragment>
      <div className="payment-form dark">
        <div className="container_payment">
          <div className="block-heading">
            <h2>Checkout Payment</h2>
            <p>This is an example of a Mercado Pago integration</p>
          </div>
          <div className="form-payment">
              <div className="products">
              <h2 class="title">Summary</h2>
              <div class="item">
                <span class="price" id="summary-price"></span>
                <p class="item-name">Book x <span id="summary-quantity"></span></p>
              </div>
              <div class="total">Total<span class="price" id="summary-total"></span></div>
              </div>
              <div className="payment-details">
                  <div className="form-group col-sm-12">
                      <br />
                      <div id="button-checkout"></div>
                      <br />
                      <a id="go-back">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" class="chevron-left">
                    <path fill="#009EE3" fill-rule="nonzero"id="chevron_left" d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"></path>
                  </svg>
                  Go back to Shopping Cart
                </a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
