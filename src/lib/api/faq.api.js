import { baseApi } from "./base.api";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: (params = {}) => ({
        url: "/faqs",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          order: params.order || "desc",
          ...params,
        },
      }),
      providesTags: ["Faqs"],
      transformResponse: (response) => {
        return {
          faq: response.items || response,
          pagination: response.pagination,
        };
      },
    }),
    createFaq: builder.mutation({
      query: (faqData) => ({
        url: "/faq",
        method: "POST",
        body: faqData,
      }),
      invalidatesTags: ["Faqs"],
    }),
  }),
});

export const { useGetFaqsQuery, useLazyGetFaqsQuery, useCreateFaqMutation } =
  faqApi;
