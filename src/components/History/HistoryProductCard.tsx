import React from "react";
import { Button } from "@mui/material";
const HistoryProductCard = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>OrderId</p>
      <p>total price</p>
      <p>payment Mode</p>
      <Button>see the product list</Button>
    </div>
  );
};

export default HistoryProductCard;
