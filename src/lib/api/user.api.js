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
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getUserProfile: builder.query({
      query: (id) => `/users/profile`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    updateProfile: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/users/${id}/update`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        "Users",
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useUpdateProfileMutation,
} = userApi;
