import { Button } from "@mui/material";
import RangeSlider from "../common/RangeSlider";
import DropDown from "../common/DropDown";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";

import { useNavigate } from "react-router-dom";
import { addFetchProducts } from "../../features/products_data/productDataFilter_slice";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";

import { useFetchproductsQuery } from "../../features/products_data/products_api";

const Header = (props) => {
  const { data: dataForFilter } = useFetchproductsQuery();
  const data = useAppSelector((s) => s);
  const dispatch = useAppDispatch();
  const filterData = useAppSelector((s) => s.productfilterData);
  // console.log(dataForFilter.data);

  useEffect(() => {
    dispatch(addFetchProducts(props.productData));
    // console.log(props.productData);
  }, [props.productData]);

  const [option, setOption] = useState("");
  let [filterOptions, setFilterOptions] = useState([]);

  let [priceRange, setPricerange] = useState({
    min: filterData.minValue,
    max: filterData.maxValue,
  });

  function findingFilterOptions() {
    let filtrSet = new Set();
    for (let i in data) {
      filtrSet.add(data[i].data);
    }
    return Array.from(filtrSet);
  }

  useEffect(() => {
    let arr = findingFilterOptions();
    setFilterOptions(arr);
  }, [data]);
  const navigate = useNavigate();
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

          <DropDown option={option} setOption={setOption} />
          <p>Select Price Range:</p>
          <div>
            <label htmlFor="minInput"> min input: </label>
            <input
              type="range"
              min={filterData?.minValue}
              max={filterData?.maxValue}
              value={priceRange.min}
              onInput={(e) => {
                // if (e.target.value > priceRange.max)
                setPricerange((prevState) => ({
                  ...prevState,
                  min: e.target.value, // Set the new value for 'max'
                }));
              }}
            />

            <label htmlFor="minInput"> max input: </label>
            <input
              type="range"
              min={filterData?.minValue}
              max={filterData?.maxValue}
              value={priceRange.max}
              onInput={(e) => {
                setPricerange((prevState) => ({
                  ...prevState,
                  max: e.target.value, // Set the new value for 'max'
                }));
              }}
            />
            <p>
              price Range :{" "}
              <b>
                <u>
                  {" "}
                  {priceRange.min} to {priceRange.max}
                </u>
              </b>
            </p>
          </div>
          <Button
            onClick={() => {
              console.log(option, priceRange.min, priceRange.max);
              if (option === "") {
                alert("select a catagory");
                return;
              }
              if (
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

        <div
          className="buttonContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              navigate("/history");
            }}
            variant="outlined"
          >
            History
            <HistoryIcon />
          </Button>
          <br />
          <Button
            onClick={() => {
              navigate("/cart");
            }}
            variant="outlined"
          >
            cart
            <ShoppingCartIcon />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
