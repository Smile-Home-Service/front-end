import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [],
  loading: false,
  error: null,
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTestimonials, addTestimonial, setLoading, setError } =
  testimonialSlice.actions;

export default testimonialSlice.reducer;
