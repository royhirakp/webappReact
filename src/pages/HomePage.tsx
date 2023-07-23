import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
//demo
import { useState, useEffect } from "react";
import { useFetchproductsQuery } from "../features/products_data/products_api";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const { data = { data: [] } } = useFetchproductsQuery();
  // console.log("product ==============", data.data, isFetching);

  useEffect(() => {
    setProductData(data.data);
  }, [data.data]);
  return (
    <>
      <h2>home page</h2>
      <div>
        <Header setProductData={setProductData} productData={productData} />
        <Main productData={productData} />
        hirak
      </div>
    </>
  );
};

export default HomePage;
