import React from "react";
import CartProductCard from "./CartProductCard";
import { useAppSelector } from "../../app/hooks";
const CartBody = () => {
  const data = useAppSelector((s) => s.cart.items);
  // const data2 = useAppSelector((s) => s.cart);
  return (
    <div>
      <h3>list of products added in the cart: </h3>
      {data.map((item, i) => {
        return (
          <div key={i * 0.0256}>
            <CartProductCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CartBody;
