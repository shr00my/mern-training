import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const ThankYou = () => {
  const [loading, setLoading] = useState(true);
  const cartList =
    JSON.parse(localStorage.getItem("items")) === null
      ? []
      : JSON.parse(localStorage.getItem("items"));

  let total = 0;

  for (let i = 0; i < cartList.length; i++) {
    total = total + Number(cartList[i].price);
  }

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
      localStorage.clear("items");
    }, 5000);
  }, []);

  return (
    <>
      <Navbar totalItems={cartList.length} />
      {loading ? (
        <>
          <div className="loading-purchase">
            Подождите, Запрос Обрабатывается...
          </div>
        </>
      ) : (
        <>
          <div className="thankyou-wrapper">
            <div className="sucess-purchase">Успешно</div>
            <div>
              {cartList.map((item, index) => {
                return (
                  <div className="thankyou-item-list" key={index}>
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                  </div>
                );
              })}
            </div>
            <span>
              Сумма покупки: <b>${total.toFixed(2)}</b>
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default ThankYou;
