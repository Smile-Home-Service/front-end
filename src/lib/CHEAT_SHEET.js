/**
 * REDUX QUICK REFERENCE CHEAT SHEET
 * Copy-paste these snippets as needed
 */

// ============================================
// 1. USING RTK QUERY
// ============================================

// Query (GET)
import { useGetServicesQuery } from "@/lib/api/service.api";

const { data, isLoading, error, refetch } = useGetServicesQuery({
  page: 1,
  limit: 10,
});

// Lazy Query (manual trigger)
import { useLazyGetUsersQuery } from "@/lib/api/user.api";

const [trigger, result] = useLazyGetUsersQuery();
// Later: trigger({ page: 1 });

// Mutation (POST/PUT/DELETE)
import { useCreateServiceMutation } from "@/lib/api/service.api";

const [createService, { isLoading, error, data }] = useCreateServiceMutation();

const handleCreate = async () => {
  try {
    const result = await createService({ name: "New Service" }).unwrap();
    console.log("Success:", result);
  } catch (err) {
    console.error("Error:", err);
  }
};

// ============================================
// 2. USING REDUX SLICES (Persisted State)
// ============================================

import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser, selectCurrentUser } from "@/lib/store/slices/user.slice";

const dispatch = useDispatch();
const currentUser = useSelector(selectCurrentUser);

// Update state (will be persisted)
dispatch(setUser({ name: "John", email: "john@example.com" }));

// Clear state
dispatch(clearUser());

// ============================================
// 3. CREATING A NEW API FILE
// ============================================

// src/lib/api/booking.api.js
import { baseApi } from "./base.api";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Query
    getBookings: builder.query({
      query: (params) => ({
        url: "/bookings",
        params,
      }),
      providesTags: ["Booking"],
    }),
    
    // Query by ID
    getBookingById: builder.query({
      query: (id) => `/bookings/${id}`,
      providesTags: (result, error, id) => [{ type: "Booking", id }],
    }),
    
    // Mutation - Create
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    
    // Mutation - Update
    updateBooking: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Booking", id }],
    }),
    
    // Mutation - Delete
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

// DON'T FORGET: Add "Booking" to tagTypes in base.api.js!

// ============================================
// 4. CREATING A NEW SLICE
// ============================================

// src/lib/store/slices/cart.slice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;

export default cartSlice.reducer;

// Then in store.js:
// 1. Import: import cartReducer from "./slices/cart.slice";
// 2. Add to rootReducer: cart: cartReducer,
// 3. Add to whitelist if you want to persist: whitelist: ["user", "cart"]

// ============================================
// 5. COMMON PATTERNS
// ============================================

// Loading state
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

// Conditional rendering based on auth
const isAuthenticated = useSelector(selectIsAuthenticated);
if (!isAuthenticated) return <Navigate to="/login" />;

// Refetch on button click
<button onClick={() => refetch()}>Refresh</button>

// Optimistic updates
const [updateItem] = useUpdateItemMutation();
await updateItem({ id: 1, name: "Updated" }).unwrap();

// Multiple queries
const { data: services } = useGetServicesQuery();
const { data: users } = useGetUsersQuery();

// ============================================
// 6. PERSISTENCE HELPERS
// ============================================

import { clearPersistedData, useIsRehydrated } from "@/lib/store/helpers";

// Check if rehydrated
const isRehydrated = useIsRehydrated();
if (!isRehydrated) return <div>Loading...</div>;

// Clear all persisted data
await clearPersistedData();

// ============================================
// 7. ADVANCED: TRANSFORM RESPONSE
// ============================================

getServices: builder.query({
  query: () => "/services",
  transformResponse: (response) => {
    // Transform the response before caching
    return {
      services: response.items || response,
      pagination: response.pagination,
      total: response.total,
    };
  },
}),

// ============================================
// 8. ADVANCED: CONDITIONAL QUERIES
// ============================================

// Skip query if condition not met
const { data } = useGetUserQuery(userId, {
  skip: !userId, // Don't fetch if no userId
});

// Polling (refetch every X seconds)
const { data } = useGetOrdersQuery(undefined, {
  pollingInterval: 3000, // Refetch every 3 seconds
});

// ============================================
// 9. ADVANCED: CACHE MANIPULATION
// ============================================

import { useDispatch } from "react-redux";
import { baseApi } from "@/lib/api/base.api";

const dispatch = useDispatch();

// Invalidate specific tag
dispatch(baseApi.util.invalidateTags(["Service"]));

// Reset entire API state
dispatch(baseApi.util.resetApiState());

// ============================================
// 10. DEBUGGING
// ============================================

// Check Redux state in console
import { useSelector } from "react-redux";
const state = useSelector((state) => state);
console.log("Redux State:", state);

// Check localStorage
console.log("Persisted:", localStorage.getItem("persist:root"));

// Check if query is cached
const { isSuccess, isFetching } = useGetServicesQuery();
console.log("Cached:", isSuccess && !isFetching);

// ============================================
// 11. TYPESCRIPT TYPES (if using TypeScript)
// ============================================

// store.js
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ============================================
// 12. COMMON MISTAKES TO AVOID
// ============================================

// ❌ DON'T: Mutate state directly
state.user = newUser;

// ✅ DO: Use reducers
dispatch(setUser(newUser));

// ❌ DON'T: Forget to add tag types
providesTags: ["NewTag"], // But "NewTag" not in base.api.js

// ✅ DO: Add to base.api.js first
tagTypes: [..., "NewTag"]

// ❌ DON'T: Persist API cache
whitelist: ["user", "api"]

// ✅ DO: Blacklist API cache
blacklist: [baseApi.reducerPath]

// ❌ DON'T: Use .then() with mutations
createService(data).then(...)

// ✅ DO: Use async/await with .unwrap()
await createService(data).unwrap()

export default "Redux Quick Reference - See comments above";
