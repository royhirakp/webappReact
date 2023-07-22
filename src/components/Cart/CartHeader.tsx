import React from "react";
import { Button } from "@mui/material";
const CartHeader = () => {
  return (
    <div>
      <h1> product Cart:</h1>
      <Button variant="contained" color="success">
        make payment
      </Button>

      <div
        style={{
          border: "1px solid",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>total item: 50</p>
        <p>totel price: 50000</p>
        <p>user id: static</p>
        <p>delevery adderss: 44/8/5h kolkara , pin = 700000</p>
      </div>
    </div>
  );
};

export default CartHeader;
