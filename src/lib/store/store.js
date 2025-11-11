import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper } from "next-redux-wrapper";
import storage from "./storage";

import { baseApi } from "../api/base.api";

// Import API slices
import userReducer from "./slices/user.slice";

// Import injected APIs (no need to import their middleware separately)
import { userApi } from "../api/user.api";
import { testimonialsApi } from "../api/testimonial.api";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  blacklist: [baseApi.reducerPath],
};

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  // Note: userApi and testimonialsApi are already included in baseApi.reducer
  // because they use injectEndpoints
  user: userReducer,
};

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }).concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  setupListeners(store.dispatch);
  return store;
};

// Create types for RootState and AppDispatch
export const wrapper = createWrapper(makeStore);
