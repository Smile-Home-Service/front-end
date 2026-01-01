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
    sendOtp: builder.mutation({
      query: (body) => ({
        url: "/users/send-otp",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "/users/verify-otp",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useLogoutMutation,
} = userApi;
