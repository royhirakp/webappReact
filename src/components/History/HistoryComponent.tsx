import React from "react";
import HistoryProductCard from "./HistoryProductCard";

const HistoryComponent = () => {
  return (
    <div>
      <p>Total orders: 5</p>
      {[1, 2, 3, 4, 5, 6].map((item, i) => {
        return (
          <div key={i * 0.2412}>
            <HistoryProductCard />
          </div>
        );
      })}
    </div>
  );
};

export default HistoryComponent;
