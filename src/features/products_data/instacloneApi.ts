import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://instacloneapi.onrender.com/api/v1",
  }),
  endpoints(builder) {
    return {
      fetchData: builder.query({
        query: () => "/instapost",
      }),
      //post request
      postFormData: builder.mutation({
        query: (formData) => ({
          url: "/instapost",
          method: "POST",
          body: formData,
        }),
        invalidatesTags: ["Post"],
      }),
    };
  },
});

export const { useFetchDataQuery, usePostFormDataMutation } = getApiSlice;
