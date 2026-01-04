import { baseApi } from "./base.api";

export const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation({
      query: (data) => ({
        url: "/subscribers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Newsletter"],
    }),
    getSubscribers: builder.query({
      query: (params = {}) => ({
        url: "/subscribers",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          ...params,
        },
      }),
      providesTags: ["Newsletter"],
    }),
    unsubscribeNewsletter: builder.mutation({
      query: (email) => ({
        url: "/subscribers/unsubscribe",
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["Newsletter"],
    }),
  }),
});

export const {
  useSubscribeNewsletterMutation,
  useGetSubscribersQuery,
  useUnsubscribeNewsletterMutation,
} = newsletterApi;
