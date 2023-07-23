import { Button } from "@mui/material";
import DropDown from "../common/DropDown";
import React from "react";
import { addFetchProducts } from "../../features/products_data/productDataFilter_slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { useFetchproductsQuery } from "../../features/products_data/products_api";
import PriceRange from "./PriceRange";
import HistoryCartButton from "./HistoryCartButton";

const Header = (props) => {
  const { data: dataForFilter } = useFetchproductsQuery();

  const dispatch = useAppDispatch();
  const filterData = useAppSelector((s) => s.productfilterData);
  const [option, setOption] = useState("");
  let [priceRange, setPricerange] = useState({
    min: filterData.minValue,
    max: filterData.maxValue,
  });
  useEffect(() => {
    dispatch(addFetchProducts(props.productData));
  }, [props.productData]);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 85px 0px 85px",
        }}
      >
        <div
          className="filterContainer"
          style={{
            border: "1px solid",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          <p>Filter your products:</p>
          <div className="filterForm">
            <DropDown option={option} setOption={setOption} />
            <PriceRange
              setPricerange={setPricerange}
              priceRange={priceRange}
              filterData={filterData}
            />
            <Button
              onClick={() => {
                // onclick function
                if (option === "") {
                  alert("select a catagory");
                  return;
                }
                if (
                  // some tiem erorrrr
                  priceRange.min > priceRange.max ||
                  (priceRange.min === 0 && priceRange.max === 0)
                ) {
                  alert("refresh the page and select a right range");
                  return;
                }
                let arr = dataForFilter.data ? dataForFilter.data : [];
                let ans = arr
                  .filter((item, i) => {
                    return item.catagory === option;
                  })
                  .filter((item, i) => {
                    let price = item.price * 1;
                    return price >= priceRange.min * 1;
                  })
                  .filter((item, i) => {
                    let price = item.price * 1;
                    return price <= priceRange.max * 1;
                  });

                // console.log(ans);
                props.setProductData(ans);
              }}
              variant="outlined"
            >
              apply filter
            </Button>
          </div>
        </div>

        <HistoryCartButton />
      </nav>
    </div>
  );
};

export default React.memo(Header);
