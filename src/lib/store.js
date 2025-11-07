import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Import your slices
// import counterReducer from './slices/counterSlice'
// import userReducer from './slices/userSlice'

// Create a placeholder reducer if you don't have slices yet
const placeholderReducer = (state = {}) => state;

const rootReducer = combineReducers({
  // Add your reducers here
  // counter: counterReducer,
  // user: userReducer,
  placeholder: placeholderReducer, // Remove this when you add actual reducers
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [], // Add reducer names you want to persist
  version: 1,
  debug: process.env.NODE_ENV !== "production", // Only debug in development
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export const persistor = (store) => persistStore(store);
