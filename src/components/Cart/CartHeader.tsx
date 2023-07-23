import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { useUpdateProductQtyMutation } from "../../features/products_data/products_api";
import { usePutHistryMutation } from "../../features/products_data/products_api";

const CartHeader = () => {
  const cartData = useAppSelector((s) => s.cart);
  const [updateProductQty, { isLoading: updateQtyIsLoading }] =
    useUpdateProductQtyMutation();
  const [addHistory, { isLoading, isSuccess }] = usePutHistryMutation();

  const handelMakepayment = useCallback(() => {
    console.log("button click");

    updateProductQty({
      cart: cartData.items,
    });
    let histroyBody = {
      totalPrice: cartData.total * 1,
      userId: "static",
      listOfProducts: cartData.items,
    };
    addHistory(histroyBody);
  }, []);
  return (
    <div>
      <h1> product Cart:</h1>
      {isSuccess ? <h1>orderd sucessfull!!!!!</h1> : ""}
      {isLoading || updateQtyIsLoading ? (
        <h1>your order is processing.......</h1>
      ) : (
        ""
      )}
      <Button onClick={handelMakepayment} variant="contained" color="success">
        make payment
      </Button>

      <div
        style={{
          border: "1px solid",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>total item: static</p>
        <p>
          totel price:
          <b>
            <u>
              <i>{cartData.total}</i>
            </u>
          </b>
        </p>
        <p>user id: static</p>
        <p>delevery adderss: 44/8/5h kolkara , pin = 700000</p>
      </div>
    </div>
  );
};

export default React.memo(CartHeader);
