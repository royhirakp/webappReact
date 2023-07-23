import React, { useState } from "react";
import { Button } from "@mui/material";
const HistoryProductCard = (props) => {
  const [productDataSatus, setSetus] = useState(false);
  console.log(props);
  return (
    <div style={{ border: "1px solid black" }}>
      <p>
        OrderId:
        <b>
          <u>{props?.item?._id}</u>
        </b>
      </p>
      <p>
        time:
        <b>
          <u>{props?.item?.time}</u>
        </b>
      </p>
      <p>
        date:
        <b>
          <u>{props?.item?.date}</u>
        </b>
      </p>
      <p>
        total price:
        <b>
          <u>{props?.item?.totalPrice}</u>
        </b>
      </p>
      <p>
        payment Mode:
        <b>
          <u>static</u>
        </b>{" "}
      </p>
      <div>
        {productDataSatus ? (
          <>
            {props?.item?.listOfProducts.map((item, i) => {
              return (
                <div key={i * 0.15522}>
                  <p>
                    {" "}
                    product No: {i + 1} :: catagory <u>{item?.catagory}</u> qty:{" "}
                    <u>{item?.reqQty}</u> price : <u>{item?.price}</u>
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <Button onClick={() => setSetus(true)}>see the product list</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryProductCard;
