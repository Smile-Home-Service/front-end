import { baseApi } from "./base.api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params = {}) => ({
        url: "/users",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          order: params.order || "desc",
          ...params,
        },
      }),
      providesTags: ["Users"],
      transformResponse: (response) => {
        return {
          users: response.items || response,
          pagination: response.pagination,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = userApi;
