import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart-slice";
import productFilterReducer from "../features/products_data/productDataFilter_slice";
import { productapiSlice } from "../features/products_data/products_api";
//insta test api
// import { getApiSlice } from "../features/products_data/instacloneApi";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productfilterData: productFilterReducer,
    [productapiSlice.reducerPath]: productapiSlice.reducer,
    // [getApiSlice.reducerPath]: getApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productapiSlice.middleware);
    // .concat(getApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
