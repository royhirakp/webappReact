import React from "react";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import {
  increaseProductQty,
  decreaseProductQty,
} from "../../features/cart/cart-slice";
const CartProductCard = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        border: "1px solid ",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="productDetailed">
        <p>product Id:{props?.item?.id} </p>
        <p>
          Product Catagory
          <b>
            <u>{props?.item.catagory}</u>
          </b>
        </p>
        <p>
          product price:
          <b>
            <u>{props?.item.price}</u>
          </b>
        </p>
      </div>

      <div
        className="buttonContainer"
        style={{ height: "50px", display: "flex" }}
      >
        <Button
          onClick={() => {
            dispatch(
              increaseProductQty({ id: props.item.id, price: props.item.price })
            );
          }}
          variant="outlined"
        >
          +
        </Button>
        <p>Product Qty: {props?.item?.reqQty}</p>
        <Button
          onClick={() => {
            dispatch(
              decreaseProductQty({ id: props.item.id, price: props.item.price })
            );
          }}
          variant="outlined"
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default React.memo(CartProductCard);
