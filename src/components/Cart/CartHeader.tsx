import React from "react";
import { Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useUpdateProductQtyMutation } from "../../features/products_data/products_api";
// import {
//   // useFetchDataQuery,
//   // usePostFormDataMutation,
// } from "../../features/products_data/instacloneApi";

import { usePutHistryMutation } from "../../features/products_data/products_api";

const CartHeader = () => {
  const cartData = useAppSelector((s) => s.cart);

  const [updateProductQty, { isLoading: updateQtyIsLoading }] =
    useUpdateProductQtyMutation();
  const [addHistory, { isLoading, isSuccess }] = usePutHistryMutation();
  // console.log(cartData.items);

  // const [] =useUpdateProductQtyMutation()
  // console.log(isFetching, "is fetching");
  // console.log(data, "=== firm card geaderr**************");
  return (
    <div>
      <h1> product Cart:</h1>
      {isSuccess ? <h1>orderd sucessfull!!!!!</h1> : ""}
      {isLoading ? <h1>your order is processing.......</h1> : ""}
      <Button
        onClick={() => {
          console.log("button click");

          updateProductQty({
            cart: cartData.items,
            // [{ id: "64bc3f02d254208399f80417", reqQty: "1" }],
          });
          let histroyBody = {
            totalPrice: cartData.total * 1,
            userId: "static",
            listOfProducts: cartData.items,
          };
          addHistory(histroyBody);
          alert(`order susecfully created!
                 cart history created
                 db updated`);
        }}
        variant="contained"
        color="success"
      >
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
        <p>
          totel price:{" "}
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

export default CartHeader;
