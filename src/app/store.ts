import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart-slice";
import { productapiSlice } from "../features/products_data/products_api";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productapiSlice.reducerPath]: productapiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productapiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
