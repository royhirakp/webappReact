import React, { lazy, Suspense } from "react";
const LazyComponent = lazy(
  () => import("../components/History/HistoryComponent")
);
const PaymentHistoryPage = () => {
  return (
    <div>
      <h1>Order History: </h1>
      <Suspense fallback={<h1>lazy loading.......</h1>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default React.memo(PaymentHistoryPage);
