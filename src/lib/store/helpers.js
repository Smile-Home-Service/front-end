/**
 * Redux Store Helpers
 * Utility functions for working with Redux and Redux Persist
 */

/**
 * Clear all persisted data from localStorage
 * Useful for logout or reset functionality
 *
 * Note: Since we're using Next.js with SSR, we clear localStorage directly
 * The persistor is managed in the client-side ReduxProvider
 */
export const clearPersistedData = async () => {
  try {
    if (typeof window !== "undefined") {
      // Clear the persist:root key
      localStorage.removeItem("persist:root");
      console.log("Persisted data cleared successfully");
      // Optionally reload to reset the store
      // window.location.reload();
    }
  } catch (error) {
    console.error("Failed to clear persisted data:", error);
  }
};

/**
 * Get the current rehydration status
 * @param {Object} state - Redux state
 * @returns {boolean} - Whether the state has been rehydrated
 */
export const isRehydrated = (state) => {
  return state._persist?.rehydrated || false;
};

/**
 * Hook to check if Redux state is ready (rehydrated)
 * Use this in components that depend on persisted data
 */
import { useSelector, useDispatch } from "react-redux";

export const useIsRehydrated = () => {
  return useSelector((state) => state._persist?.rehydrated || false);
};

/**
 * Get persisted data directly from localStorage (without Redux)
 * Useful for reading data before Redux is initialized
 */
export const getPersistedData = (key) => {
  if (typeof window === "undefined") return null;

  try {
    const persistedRoot = localStorage.getItem("persist:root");
    if (!persistedRoot) return null;

    const parsed = JSON.parse(persistedRoot);
    if (key && parsed[key]) {
      return JSON.parse(parsed[key]);
    }
    return parsed;
  } catch (error) {
    console.error("Failed to get persisted data:", error);
    return null;
  }
};

/**
 * Example usage in components:
 *
 * // 1. Check if state is rehydrated before rendering
 * function MyComponent() {
 *   const isRehydrated = useIsRehydrated();
 *
 *   if (!isRehydrated) {
 *     return <LoadingSpinner />;
 *   }
 *
 *   return <div>Content here...</div>;
 * }
 *
 * // 2. Clear persisted data on logout
 * function LogoutButton() {
 *   const dispatch = useDispatch();
 *
 *   const handleLogout = async () => {
 *     dispatch(clearUser()); // Clear from Redux
 *     await clearPersistedData(); // Clear from localStorage
 *     window.location.href = "/login";
 *   };
 *
 *   return <button onClick={handleLogout}>Logout</button>;
 * }
 *
 * // 3. Read persisted data before Redux initializes
 * const userData = getPersistedData("user");
 * if (userData?.isAuthenticated) {
 *   // User is logged in
 * }
 */
