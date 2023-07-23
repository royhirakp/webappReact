// import React from "react";
import HistoryProductCard from "./HistoryProductCard";
import { useFetchCartHistoryQuery } from "../../features/products_data/products_api";
const HistoryComponent = () => {
  const { data = [], isFetching } = useFetchCartHistoryQuery();
  return (
    <div>
      <p>Total orders: 5</p>
      {isFetching ? <h1>Loading.....</h1> : ""}
      {data?.data?.map((item, i) => {
        return (
          <div key={i * 0.2412}>
            <HistoryProductCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default HistoryComponent;
