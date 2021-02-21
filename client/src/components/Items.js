import React from "react";
import item1 from "../images/shoes-1.jpg";
import item2 from "../images/shoes-2.jpg";
import item3 from "../images/shoes-3.jpg";
import "../styles/items.css";

const data = [
  {
    id: 1,
    title: "Adidas",
    price: 79.99,
    img: item1,
  },
  {
    id: 2,
    title: "Nike",
    price: 99.99,
    img: item2,
  },
  {
    id: 3,
    title: "Saucony",
    price: 49.99,
    img: item3,
  },
];

export const Items = React.memo(function Items({ addToCart, handleClick }) {
  const cards = data.map((data, index) => {
    return (
      <div className="col mr-3 ml-3 mt-3" key={index}>
        <div key={index} className="card" id={data.id}>
          <img src={data.img} className="card-img-top" alt={`shoes-${index}`} />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>

            <div>
              <h4 className="item-price">${data.price}</h4>
            </div>

            <div className="item-card-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => addToCart(data)}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row row-bg" onClick={handleClick}>
      {cards}
    </div>
  );
});

export default Items;
