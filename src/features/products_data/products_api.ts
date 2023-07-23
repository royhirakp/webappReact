import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://webapp-api-udwv.onrender.com/api/v1/products
interface ProductsData {
  id: string;
  price: string;
  catagory: string;
  Qty: string;
  __v: number;
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
      updateProductQty: builder.mutation({
        query(body) {
          return {
            url: "/products",
            method: "PUT",
            body: body,
          };
        },
      }),
      fetchCartHistory: builder.query({
        query() {
          return `/history`;
        },
      }),
      putHistry: builder.mutation({
        query(body) {
          return { url: "/history", method: "POST", body: body };
        },
      }),
    };
  },
});

export const {
  useFetchproductsQuery,
  useFetchCartHistoryQuery,
  usePutHistryMutation,
  useUpdateProductQtyMutation,
} = productapiSlice;
