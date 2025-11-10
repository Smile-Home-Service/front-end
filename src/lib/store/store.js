import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";

import { baseApi } from "../api/base.api";
import { userApi } from "../api/user.api";

// Import API slices
import userReducer from "../slices/user.slice";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: [baseApi.reducerPath],
};

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
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
export default wrapper;
