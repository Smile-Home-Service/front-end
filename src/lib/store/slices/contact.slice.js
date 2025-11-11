import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
});

export const { setLoading, setSuccess, setError, clearContactState } =
  contactSlice.actions;

// Selectors
export const selectContactLoading = (state) => state.contact.loading;
export const selectContactSuccess = (state) => state.contact.success;
export const selectContactError = (state) => state.contact.error;

export default contactSlice.reducer;
