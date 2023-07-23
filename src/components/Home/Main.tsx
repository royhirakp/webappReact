import ProductCart from "../common/ProductCart";
import { useFetchproductsQuery } from "../../features/products_data/products_api";
import React from "react";
const Main = (props) => {
  const { isFetching } = useFetchproductsQuery();

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
        {isFetching ? (
          <h1>Loading data.....</h1>
        ) : (
          <>
            {props.productData.map((item, i) => {
              return (
                <div key={i * 0.22552}>
                  <ProductCart item={item} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(Main);
