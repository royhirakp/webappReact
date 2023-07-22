import React from "react";
import { Button } from "@mui/material";
const CartProductCard = () => {
  return (
    <div
      style={{
        border: "1px solid ",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="productDetailed">
        <p>product Id: </p>
        <p>Product Catagory</p>
        <p>product price</p>
      </div>

      <div
        className="buttonContainer"
        style={{ height: "50px", display: "flex" }}
      >
        <Button variant="outlined">+</Button>
        <p>Product Qty: {"5"}</p>
        <Button variant="outlined">-</Button>
      </div>
    </div>
  );
};

export default CartProductCard;
