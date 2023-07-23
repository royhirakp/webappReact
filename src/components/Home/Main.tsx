import ProductCart from "../common/ProductCart";
import { useEffect, useState } from "react";
import { useFetchproductsQuery } from "../../features/products_data/products_api";
// import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { addFetchProducts } from "../../features/products_data/productDataFilter_slice";
const Main = (props) => {
  const { isFetching } = useFetchproductsQuery();
  // const [filterProductData, setfilterProductData] = useState([]);
  // const productFilterData = useAppSelector((s) => s.productfilterData);
  // const dispatch = useAppDispatch();
  // console.log(props);
  // function addData() {
  // setfilterProductData(data.data);
  // dispatch(addFetchProducts(data.data));
  // }
  // useEffect(() => {
  //   addData();
  // }, [data]);

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
                  {" "}
                  <ProductCart item={item} />{" "}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Main;
