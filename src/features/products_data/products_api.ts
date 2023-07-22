import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://webapp-api-udwv.onrender.com/api/v1/products
interface ProductsData {
  id: string;
  price: string;
  catagory: string;
  Qty: string;
  __v: number;
  //     "_id": "64bc3f02d254208399f80417",
  // "price": "15",
  // "catagory": "two",
  // "Qty": 50555,
  // "__v": 0
}
export const productapiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://webapp-api-udwv.onrender.com/api/v1",
    prepareHeaders(haders) {
      haders.set("key", "data");
      return haders;
    },
  }),
  endpoints(builder) {
    return {
      fetchproducts: builder.query<ProductsData[], number | void>({
        query(limit = 10) {
          return `/products`;
        },
      }),
    };
  },
});

export const { useFetchproductsQuery } = productapiSlice;
