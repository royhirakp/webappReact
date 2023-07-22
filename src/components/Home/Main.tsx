import ProductCart from "../common/ProductCart";
import { useFetchproductsQuery } from "../../features/products_data/products_api";
const Main = () => {
  const { data = { data: [] }, isFetching } = useFetchproductsQuery();
  console.log(data);
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
        {/* <div> */}
        {isFetching ? (
          <h1>Loading data.....</h1>
        ) : (
          <>
            {data.data.map((item, i) => {
              return (
                <div key={i * 0.22552}>
                  <ProductCart item={item} />
                </div>
              );
            })}
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default Main;
