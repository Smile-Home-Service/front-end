import { baseApi } from "./base.api";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (params = {}) => ({
        url: "/contacts",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          order: params.order || "desc",
          ...params,
        },
      }),
      providesTags: ["Contacts"],
      transformResponse: (response) => {
        return {
          users: response.items || response,
          pagination: response.pagination,
        };
      },
    }),
  }),
});

export const { useGetContactsQuery, useLazyGetContactsQuery } = contactApi;
