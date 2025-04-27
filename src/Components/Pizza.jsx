import React from "react";

const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <li className="pizza">
        <img src={pizzaObj.photoName} alt="Photo of Pizza" />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? 'Sold out':  pizzaObj.price}</span>

        </div>
      </li>
    </>
  );
};

export default Pizza;
