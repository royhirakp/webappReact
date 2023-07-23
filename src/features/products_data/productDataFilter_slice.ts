import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: string;
  price: string;
  catagory: string;
  Qty: string;
  __v: number;
}
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
      // add min and max value
      let max = 0;
      let min = +Infinity;
      let arr = actions.payload;
      for (let i = 0; i < arr.length; i++) {
        let price = arr[i].price * 1;
        if (price > max) {
          max = price;
        }
        if (price < min) {
          min = price;
        }

        state.Filter.push({ data: arr[i].catagory });
      }
      state.maxValue = max;
      state.minValue = min;
    },
  },
});

export const { addFetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
