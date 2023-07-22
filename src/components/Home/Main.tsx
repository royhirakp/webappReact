import React from "react";
import ProductCart from "../common/ProductCart";

const Main = () => {
  return (
    <>
      <h2>Product List</h2>
      <div
        style={{
          border: "1px solid",
          justifyContent: "space-around",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 5, 8, 6, 5, 2, 5, 5].map((item, i) => {
          return (
            <div key={i * 0.22552}>
              <ProductCart />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
