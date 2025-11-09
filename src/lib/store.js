import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Import APIs
import { baseApi } from "./api/base.api";
import authReducer from "./features/auth/auth.slice";

const rootReducer = combineReducers({
  // Add API reducers
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Persist the auth slice
  version: 1,
  debug: process.env.NODE_ENV !== "production",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Export makeStore function instead of direct store
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }).concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Export persistor function that accepts store
export const persistor = (store) => persistStore(store);

// For direct access if needed (optional)
export const store = makeStore();
export const directPersistor = persistStore(store);
