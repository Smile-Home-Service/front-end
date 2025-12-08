import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:9000/api/v1",
  prepareHeaders: (headers, { getState }) => {
    // You can add auth headers here if needed
    // const token = getState().auth.token;
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Users", "Service", "Testimonials", "Contact", "FAQ"], // Add your tag types here
  endpoints: () => ({}), // endpoints will be injected from other API slices
  keepUnusedDataFor: 60 * 5, // 5 minutes cache
});
