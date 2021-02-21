import React, { useState } from "react";
import "../styles/test.css";
import Items from "./Items";
import Navbar from "./Navbar";

const Test = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("items")) === null
      ? []
      : JSON.parse(localStorage.getItem("items"))
  );

  let total = 0;

  for (let i = 0; i < cartList.length; i++) {
    total = total + Number(cartList[i].price);
  }

  const addToCart = (item) => {
    if (cartList.length === 0) {
      setCartList([item]);
      localStorage.setItem("items", JSON.stringify(item));
    } else if (cartList.length === undefined) {
      const newCartList = [cartList, item];
      setCartList(newCartList);
      localStorage.setItem("items", JSON.stringify(newCartList));
    } else {
      const newCartList = [...cartList, item];
      setCartList(newCartList);
      localStorage.setItem("items", JSON.stringify(newCartList));
    }
  };

  return (
    <>
      <Navbar totalItems={cartList.length} total={total} />
      <Items addToCart={addToCart} />
    </>
  );
};

export default Test;
