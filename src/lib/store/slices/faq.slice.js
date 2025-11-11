import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const faqSlice = createSlice({
  name: "faq",
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
    clearFaqState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
});

export const { setLoading, setSuccess, setError, clearFaqState } =
  faqSlice.actions;

// Selectors
export const selectFaqLoading = (state) => state.faq.loading;
export const selectFaqSuccess = (state) => state.faq.success;
export const selectFaqError = (state) => state.faq.error;

export default faqSlice.reducer;
