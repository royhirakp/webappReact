import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string;
  price: string;
  catagory: string;
  Qty: string;
  __v: number;
  // Add other properties here if necessary
}
// interface MinMax {}
interface Filter {
  data: string;
}
interface ProductState {
  items: Item[];
  minValue: number;
  maxValue: number;
  Filter: Filter[];
}

const initialState: ProductState = {
  items: [],
  minValue: 0,
  maxValue: 0,
  Filter: [],
};

const productsSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    addFetchProducts(state, actions) {
      // state.items = actions.payload;
      // add min and max value
      let max = 0;
      let min = +Infinity;
      let arr = actions.payload;
      let catagorySet = new Set();
      //   console.log(arr, "array form filter slice ");
      for (let i = 0; i < arr.length; i++) {
        let price = arr[i].price * 1;
        if (price > max) {
          max = price;
        }
        if (price < min) {
          min = price;
        }
        // state.Filter
        // catagorySet.add();
        state.Filter.push({ data: arr[i].catagory });
      }
      state.maxValue = max;
      state.minValue = min;
      //   state.Filter = catagoryArr;
      // add catagory to the filter
    },
  },
});

export const { addFetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
