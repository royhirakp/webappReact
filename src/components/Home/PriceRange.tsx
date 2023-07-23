import React, { useCallback } from "react";

const PriceRange = ({ setPricerange, priceRange, filterData }) => {
  const handelMinInputprice = useCallback((e) => {
    // if (e.target.value > priceRange.max)
    setPricerange((prevState) => ({
      ...prevState,
      min: e.target.value,
    }));
  }, []);

  const handelMaxInputprice = useCallback((e) => {
    setPricerange((prevState) => ({
      ...prevState,
      max: e.target.value,
    }));
  }, []);

  return (
    <div>
      <p>Select Price Range:</p>
      {/* <div> */}
      <label htmlFor="minInput"> min input: </label>
      <input
        type="range"
        min={filterData?.minValue}
        max={filterData?.maxValue}
        value={priceRange.min}
        onInput={handelMinInputprice}
      />

      <label htmlFor="minInput"> max input: </label>
      <input
        type="range"
        min={filterData?.minValue}
        max={filterData?.maxValue}
        value={priceRange.max}
        onInput={handelMaxInputprice}
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
      {/* </div> */}
    </div>
  );
};

export default React.memo(PriceRange);
