/**
 * REDUX PERSIST USAGE GUIDE
 * 
 * This file demonstrates how to use Redux Persist with RTK Query
 * in your Smile Home Service application.
 */

// ============================================
// 1. PERSISTING USER DATA (Already Configured)
// ============================================

import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser, selectCurrentUser, selectIsAuthenticated } from "@/lib/store/slices/user.slice";

function UserComponent() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Login example - this will be persisted automatically
  const handleLogin = (userData) => {
    dispatch(setUser(userData));
    // User data is now saved to localStorage automatically!
  };

  // Logout example - this will clear persisted data
  const handleLogout = () => {
    dispatch(clearUser());
    // User data is removed from localStorage automatically!
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {currentUser?.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => handleLogin({ name: "John", email: "john@example.com" })}>
          Login
        </button>
      )}
    </div>
  );
}

// ============================================
// 2. USING RTK QUERY (NOT Persisted - Cache Only)
// ============================================

import { useGetUsersQuery } from "@/lib/api/user.api";
import { useGetServicesQuery } from "@/lib/api/service.api";

function ServicesComponent() {
  // RTK Query automatically caches data for 5 minutes (configured in base.api.js)
  // This cache is NOT persisted to localStorage (by design)
  const { data, isLoading, error, refetch } = useGetServicesQuery({
    page: 1,
    limit: 10,
  });

  // The cache will be cleared on page refresh
  // Use refetch() to manually refresh data
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh Services</button>
      {data?.services?.map(service => (
        <div key={service.id}>{service.name}</div>
      ))}
    </div>
  );
}

// ============================================
// 3. ADDING MORE SLICES TO PERSIST
// ============================================

// If you want to persist other slices (e.g., theme, settings):
// 
// Step 1: Create a new slice (example: theme.slice.js)
/*
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
    primaryColor: "#3b82f6",
  },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setTheme, setPrimaryColor } = themeSlice.actions;
export default themeSlice.reducer;
*/

// Step 2: Add to store.js
/*
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
*/

// ============================================
// 4. ADVANCED: PERSISTING SPECIFIC FIELDS ONLY
// ============================================

// If you want to persist only specific fields from a slice:
/*
import { createTransform } from "redux-persist";

// Create a transform to persist only specific fields
const userTransform = createTransform(
  // Transform state on its way to being serialized and persisted
  (inboundState, key) => {
    if (key === "user") {
      // Only persist these fields
      return {
        currentUser: inboundState.currentUser,
        isAuthenticated: inboundState.isAuthenticated,
        // Don't persist 'loading' field
      };
    }
    return inboundState;
  },
  // Transform state being rehydrated
  (outboundState, key) => {
    if (key === "user") {
      return {
        ...outboundState,
        loading: false, // Reset loading to false on rehydration
      };
    }
    return outboundState;
  },
  { whitelist: ["user"] }
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  transforms: [userTransform],
};
*/

// ============================================
// 5. CLEARING PERSISTED DATA
// ============================================

import { persistor } from "@/lib/store/store";

function SettingsComponent() {
  const handleClearCache = async () => {
    // Clear all persisted data
    await persistor.purge();
    // Optionally reload the page
    window.location.reload();
  };

  return (
    <button onClick={handleClearCache}>
      Clear All Cached Data
    </button>
  );
}

// ============================================
// 6. CHECKING REHYDRATION STATUS
// ============================================

import { useSelector } from "react-redux";

function AppComponent() {
  // Check if state has been rehydrated from storage
  const _persist = useSelector((state) => state._persist);
  
  if (!_persist?.rehydrated) {
    return <div>Loading persisted data...</div>;
  }

  return <div>App is ready!</div>;
}

// ============================================
// 7. RTK QUERY WITH MUTATIONS
// ============================================

import { useCreateServiceMutation, useUpdateServiceMutation } from "@/lib/api/service.api";

function CreateServiceForm() {
  const [createService, { isLoading, error, data }] = useCreateServiceMutation();

  const handleSubmit = async (serviceData) => {
    try {
      const result = await createService(serviceData).unwrap();
      console.log("Service created:", result);
      // The cache will automatically be invalidated and refetched
    } catch (err) {
      console.error("Failed to create service:", err);
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit({ name: "New Service", description: "..." });
    }}>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Service"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

// ============================================
// 8. BEST PRACTICES
// ============================================

/**
 * DO:
 * ✅ Persist user authentication state
 * ✅ Persist user preferences (theme, language, etc.)
 * ✅ Persist shopping cart data
 * ✅ Use RTK Query for server data (don't persist API cache)
 * 
 * DON'T:
 * ❌ Don't persist API cache (it can become stale)
 * ❌ Don't persist sensitive data (tokens should use httpOnly cookies)
 * ❌ Don't persist large amounts of data (keep it minimal)
 * ❌ Don't persist UI state that should reset on refresh
 */

export {
  UserComponent,
  ServicesComponent,
  SettingsComponent,
  AppComponent,
  CreateServiceForm,
};
