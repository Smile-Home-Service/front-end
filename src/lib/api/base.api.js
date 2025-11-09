import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:900/api/v1",
  prepareHeaders: (headers, { getState }) => {
    // Get token from redux state
    const token = getState()?.auth?.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    headers.set("content-type", "application/json");
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Service", "Category", "Booking"],
  endpoints: () => ({}),
});
