import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Checkout = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("items")) === null
      ? []
      : JSON.parse(localStorage.getItem("items"))
  );

  let total = 0;

  for (let i = 0; i < cartList.length; i++) {
    total = total + Number(cartList[i].price);
  }

  const clearCart = () => {
    localStorage.clear("items");
    setCartList([]);
  };

  return (
    <div>
      <Navbar totalItems={cartList.length} />
      <div>
        {cartList.length === undefined ? (
          <div className="checkout-item-list" key={cartList.id}>
            <span>{cartList.title}</span> <span>${cartList.price}</span>
          </div>
        ) : (
          cartList.map((item, index) => {
            return (
              <ul className="list-group col-lg-2" key={index}>
                <li className="list-group-item">
                  <span>{item.title}: </span>
                  <span> ${item.price}</span>
                </li>
              </ul>
            );
          })
        )}
      </div>
      <div>
        {cartList.length === undefined ? (
          <>
            <div className="checkout-total">${cartList.price.toFixed(2)}</div>
            <div>
              <Link to="/test-thank-you">
                <button>Подтвердить</button>
              </Link>

              <button onClick={() => clearCart()}>Очистить корзину</button>
            </div>
          </>
        ) : cartList.length > 0 ? (
          <>
            <div className="checkout-total">${total.toFixed(2)}</div>
            <div>
              <Link to="/test-thank-you">
                <button>Подтвердить</button>
              </Link>
              <button onClick={() => clearCart()}>Очистить корзину</button>
            </div>
          </>
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
