# Redux & Redux Persist Setup Guide

## 📋 Overview

Your Smile Home Service application uses:

- **Redux Toolkit** for state management
- **RTK Query** for API calls and caching
- **Redux Persist** for persisting state to localStorage
- **Next.js 15** with App Router

## 🏗️ Architecture

```
src/lib/
├── api/                    # RTK Query API definitions
│   ├── base.api.js        # Base API configuration
│   ├── user.api.js        # User endpoints
│   ├── service.api.js     # Service endpoints
│   ├── contact.api.js     # Contact endpoints
│   ├── faq.qpi.js         # FAQ endpoints
│   └── testimonial.api.js # Testimonial endpoints
├── store/                  # Redux store configuration
│   ├── slices/            # Redux slices
│   │   ├── user.slice.js
│   │   ├── contact.slice.js
│   │   ├── faq.slice.js
│   │   └── appSettings.slice.js (example)
│   ├── store.js           # Store configuration with persistence
│   ├── storage.js         # Storage adapter for SSR
│   └── helpers.js         # Utility functions
└── providers/
    └── ReduxProvider.jsx  # Provider with PersistGate
```

## ✅ What's Been Fixed

### 1. **Redux Persist Implementation**

- ✅ Added `persistReducer` to wrap the root reducer
- ✅ Added `PersistGate` to handle rehydration
- ✅ Configured to persist only the `user` slice (not API cache)

### 2. **RTK Query Configuration**

- ✅ Fixed missing tag types in `base.api.js`
- ✅ Fixed import path in `service.api.js`
- ✅ Proper cache invalidation setup

### 3. **Next.js SSR Compatibility**

- ✅ Storage adapter that works with SSR
- ✅ Proper client-side only persistence

## 🚀 How to Use

### 1. **Using RTK Query (API Calls)**

```javascript
import {
  useGetServicesQuery,
  useCreateServiceMutation,
} from "@/lib/api/service.api";

function ServicesPage() {
  // Query - automatically cached for 5 minutes
  const { data, isLoading, error, refetch } = useGetServicesQuery({
    page: 1,
    limit: 10,
  });

  // Mutation
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation();

  const handleCreate = async () => {
    try {
      const result = await createService({ name: "New Service" }).unwrap();
      console.log("Created:", result);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.services?.map((service) => (
        <div key={service.id}>{service.name}</div>
      ))}
      <button onClick={handleCreate}>Create Service</button>
    </div>
  );
}
```

### 2. **Using Persisted State (User Data)**

```javascript
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  clearUser,
  selectCurrentUser,
} from "@/lib/store/slices/user.slice";

function UserProfile() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  // Login - data will be persisted to localStorage
  const handleLogin = (userData) => {
    dispatch(setUser(userData));
    // User data is now saved and will persist across page reloads!
  };

  // Logout - clears persisted data
  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      {currentUser ? (
        <>
          <p>Welcome, {currentUser.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={() => handleLogin({ name: "John" })}>Login</button>
      )}
    </div>
  );
}
```

### 3. **Adding a New Persisted Slice**

**Step 1:** Create the slice (e.g., `theme.slice.js`)

```javascript
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

**Step 2:** Add to `store.js`

```javascript
import themeReducer from "./slices/theme.slice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
  theme: themeReducer, // Add here
  // ... other reducers
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "theme"], // Add "theme" to persist it
  blacklist: [baseApi.reducerPath],
};
```

### 4. **Creating New API Endpoints**

```javascript
// src/lib/api/booking.api.js
import { baseApi } from "./base.api";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: (params) => ({
        url: "/bookings",
        params,
      }),
      providesTags: ["Booking"],
    }),

    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const { useGetBookingsQuery, useCreateBookingMutation } = bookingApi;
```

**Don't forget to add "Booking" to tagTypes in `base.api.js`!**

## 🔑 Key Concepts

### What Gets Persisted?

- ✅ User authentication state
- ✅ User preferences (theme, language, etc.)
- ✅ Any slice in the `whitelist` array

### What Doesn't Get Persisted?

- ❌ RTK Query cache (it's in the `blacklist`)
- ❌ Any slice not in the `whitelist`
- ❌ Temporary UI state

### Why Not Persist API Cache?

- Cache can become stale
- Takes up unnecessary storage space
- RTK Query handles caching efficiently in memory
- Fresh data is fetched on page load

## 🛠️ Utility Functions

```javascript
import {
  clearPersistedData,
  useIsRehydrated,
  getPersistedData,
} from "@/lib/store/helpers";

// 1. Check if state is rehydrated
function MyComponent() {
  const isRehydrated = useIsRehydrated();

  if (!isRehydrated) {
    return <div>Loading...</div>;
  }

  return <div>Ready!</div>;
}

// 2. Clear all persisted data (logout)
const handleLogout = async () => {
  await clearPersistedData();
  window.location.href = "/login";
};

// 3. Read persisted data directly from localStorage
const userData = getPersistedData("user");
if (userData?.isAuthenticated) {
  // User is logged in
}
```

## 📝 Best Practices

### DO ✅

- Persist user authentication state
- Persist user preferences (theme, language)
- Use RTK Query for all API calls
- Use `providesTags` and `invalidatesTags` for cache management
- Keep persisted data minimal

### DON'T ❌

- Don't persist API cache
- Don't persist sensitive data (use httpOnly cookies for tokens)
- Don't persist large amounts of data
- Don't persist temporary UI state
- Don't forget to add tag types to `base.api.js`

## 🐛 Troubleshooting

### Cache not invalidating?

Make sure the tag type is added to `tagTypes` in `base.api.js`:

```javascript
tagTypes: [
  "User",
  "Users",
  "Service",
  "Testimonials",
  "Contact",
  "FAQ",
  "YourNewTag",
];
```

### Data not persisting?

1. Check if the slice is in the `whitelist` in `store.js`
2. Make sure you're using `dispatch` to update state
3. Check browser localStorage (DevTools → Application → Local Storage)

### Hydration errors?

- Make sure you're using `PersistGate` in `ReduxProvider.jsx`
- Check that `storage.js` handles SSR correctly

## 📚 Additional Resources

- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [Redux Persist Documentation](https://github.com/rt2zz/redux-persist)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

## 📁 Example Files

- `REDUX_PERSIST_GUIDE.jsx` - Comprehensive usage examples
- `appSettings.slice.js` - Example of a persistable slice
- `helpers.js` - Utility functions for common operations
