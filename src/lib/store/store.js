import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";

import { baseApi } from "../api/base.api";

// Import API slices
import userReducer from "./slices/user.slice";
import contactReducer from "./slices/contact.slice";
import faqReducer from "./slices/faq.slice";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // Only persist user slice
  blacklist: [baseApi.reducerPath], // Don't persist API cache
};

// Combine all reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
  contact: contactReducer,
  faq: faqReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
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
