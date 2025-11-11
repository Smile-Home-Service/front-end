import { baseApi } from "./base.api";

export const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: (params = {}) => ({
        url: "/testimonials",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          status: params.status || "active",
          is_deleted: params.is_deleted || 0,
          order: params.order || "desc",
          ...params,
        },
      }),
      providesTags: ["Testimonials"],
      transformResponse: (response) => {
        const items = (response.items || []).map((item) => ({
          id: item.id,
          name: item.fullname,
          content: item.message,
          image: item.profile_picture,
          service: item.services,
          rating: item.rating,
          status: item.status,
          is_deleted: item.is_deleted,
          createdAt: item.createdAt,
        }));

        return {
          items,
          pagination: response.pagination || {},
        };
      },
    }),
  }),
});

export const { useGetTestimonialsQuery, useLazyGetTestimonialsQuery } =
  testimonialsApi;
