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
    createContact: builder.mutation({
      query: (contactData) => ({
        url: "/contact",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useLazyGetContactsQuery,
  useCreateContactMutation,
} = contactApi;
