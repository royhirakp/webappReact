import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: string;
  reqQty: number;
  price: number;
  catagory: string;
  // Add other properties here if necessary
}

interface CartState {
  items: Item[];
  total: number;
  userId: string;
}

const initialState: CartState = {
  items: [],
  total: 0,
  userId: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, actions) {
      state.items.push(actions.payload);
      let price = actions.payload.price * 1;
      state.total = state.total + price;
    },
    increaseProductQty(state, actions: PayloadAction<object>) {
      const idtoADD = actions.payload.id;
      let arr = state.items;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === idtoADD) {
          let val = arr[i].reqQty * 1 + 1;
          arr[i].reqQty = val;
          break;
        }
      }
      state.items = arr;
      state.total = state.total + actions.payload.price * 1;
    },
    decreaseProductQty(state, actions: PayloadAction<object>) {
      const idtoADD = actions.payload.id;
      let arr = state.items;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === idtoADD) {
          let val = arr[i].reqQty * 1 - 1;
          arr[i].reqQty = val;
          break;
        }
      }
      state.items = arr;
      state.total = state.total - actions.payload.price * 1;
    },

    removeItem(state, actions: PayloadAction<string>) {
      const idToRemove = actions.payload;
      let arr = state.items.filter((item) => item.id !== idToRemove);
      state.items = arr;
    },
    //decrement
  },
});

export const {
  addItem,
  removeItem,

  increaseProductQty,
  decreaseProductQty,
} = cartSlice.actions;
export default cartSlice.reducer;
