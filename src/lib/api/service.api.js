import { baseApi } from "./base.api";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all services
    getServices: builder.query({
      query: (params = {}) => ({
        url: "/services",
        method: "GET",
        params,
      }),
      providesTags: ["Service"],
    }),

    // Get service by ID
    getServiceById: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Service", id }],
    }),

    // Create new service
    createService: builder.mutation({
      query: (serviceData) => ({
        url: "/services",
        method: "POST",
        body: serviceData,
      }),
      invalidatesTags: ["Service"],
    }),

    // Update service
    updateService: builder.mutation({
      query: ({ id, ...serviceData }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: serviceData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Service", id }],
    }),

    // Delete service
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),

    // Get services by category
    getServicesByCategory: builder.query({
      query: (categoryId) => ({
        url: `/services/category/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["Service"],
    }),

    // Search services
    searchServices: builder.query({
      query: (searchTerm) => ({
        url: "/services/search",
        method: "GET",
        params: { q: searchTerm },
      }),
      providesTags: ["Service"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useGetServicesByCategoryQuery,
  useSearchServicesQuery,
} = serviceApi;
