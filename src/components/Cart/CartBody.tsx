import React from "react";
import CartProductCard from "./CartProductCard";

const CartBody = () => {
  return (
    <div>
      <p>list of products added in the cart: </p>
      {[1, 2, 3, 4, 5, 6, 5].map((item, i) => {
        return (
          <div key={i * 0.0256}>
            <CartProductCard />
          </div>
        );
      })}
    </div>
  );
};

export default CartBody;
