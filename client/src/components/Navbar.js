import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "./customRef";

const Navbar = ({ total, totalItems }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("items")) === null
      ? []
      : JSON.parse(localStorage.getItem("items"))
  );

  const [showCart, setShowCart] = useState(false);

  const ref = useRef();

  const items = useRef(totalItems);

  const showCartInfo = () => {
    setShowCart(true);
    setCartList(JSON.parse(localStorage.getItem("items")));
  };

  useEffect(() => {
    console.log(ref);
    items.current = cartList.length;
  }, [cartList]);

  useOutsideClick(
    ref,
    () => {
      console.log(ref);
      if (showCart) {
        setShowCart(false);
      }
    },
    [ref]
  );

  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <div className="header-bottom header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-1 col-md-1 col-sm-3">
                  <div className="logo"></div>
                </div>
                <div className="col-xl-5 col-lg-7 col-md-7 col-sm-5">
                  <div className="main-menu f-right d-block">
                    <nav className="nav-pills">
                      <ul id="navigation" className="d-flex">
                        <Link to="/" className="menu-item-hover">
                          <li>
                            <span className="menu-item">Home</span>
                          </li>
                        </Link>
                        <Link to="/new" className="menu-item-hover">
                          <li className="hot">
                            <span className="menu-item">New</span>
                          </li>
                        </Link>
                        <Link to="/contact" className="menu-item-hover">
                          <li>
                            <span className="menu-item">Contact</span>
                          </li>
                        </Link>
                        <Link to="/" className="menu-item-hover">
                          <li>
                            <span className="menu-item">About</span>
                          </li>
                        </Link>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-3">
                  <ul className="header-right f-right d-none d-lg-flex d-flex justify-content-between align-items-center">
                    <li className="menu-item phone">
                      <a href="tel:+380637694382" className="phone-style">
                        <span>+380</span>
                        <span>63769</span>
                        <span>4382</span>
                      </a>
                    </li>

                    <li className="d-xl-block">
                      <div className="shopping-card" onClick={showCartInfo}>
                        <div className="shopping-card-before">
                          {totalItems === undefined
                            ? 1
                            : totalItems !== 0
                            ? totalItems
                            : null}
                        </div>

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-cart"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                        </span>
                      </div>
                    </li>
                    {showCart && total > 0 && (
                      <div className="showCart" ref={ref}>
                        {cartList.map((items, index) => (
                          <div className="cart-details" key={index}>
                            <span>{items.title}:</span>
                            <span className="cart-details-price">
                              {" "}
                              ${items.price}
                            </span>
                          </div>
                        ))}
                        <Link to="/test-checkout">
                          <button
                            type="button"
                            className="btn btn-dark btn-checkout"
                          >
                            Перейти к оплате
                          </button>
                        </Link>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
