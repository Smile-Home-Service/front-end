import { createSlice } from "@reduxjs/toolkit";

/**
 * App Settings Slice - Example of a slice you might want to persist
 * This demonstrates how to create a new slice that will be persisted to localStorage
 */

const initialState = {
  theme: "light", // "light" | "dark"
  language: "en", // "en" | "ne" | etc.
  notifications: {
    email: true,
    push: true,
    sms: false,
  },
  preferences: {
    currency: "NPR",
    timezone: "Asia/Kathmandu",
    itemsPerPage: 10,
  },
};

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    updateNotificationSettings: (state, action) => {
      state.notifications = {
        ...state.notifications,
        ...action.payload,
      };
    },
    updatePreferences: (state, action) => {
      state.preferences = {
        ...state.preferences,
        ...action.payload,
      };
    },
    resetSettings: () => initialState,
  },
});

export const {
  setTheme,
  setLanguage,
  updateNotificationSettings,
  updatePreferences,
  resetSettings,
} = appSettingsSlice.actions;

// Selectors
export const selectTheme = (state) => state.appSettings.theme;
export const selectLanguage = (state) => state.appSettings.language;
export const selectNotificationSettings = (state) =>
  state.appSettings.notifications;
export const selectPreferences = (state) => state.appSettings.preferences;

export default appSettingsSlice.reducer;
