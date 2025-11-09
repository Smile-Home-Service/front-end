import { baseApi } from "./baseApi";
import { setCredentials } from "../features/auth/auth.slice";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query({
      query: (params = {}) => ({
        url: "/users",
        method: "GET",
        params,
      }),
      providesTags: ["User"],
    }),

    // Get user by ID
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    // Create new user
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    // Update user
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),

    // Delete user
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    // User login
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {
          // console.log(error);
        }
      },
    }),

    // User register
    register: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {
          // console.log(error);
        }
      },
    }),

    // Get user profile
    getProfile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // Update user profile
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/users/profile",
        method: "PUT",
        body: profileData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = userApi;
