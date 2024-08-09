import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
    changePhoneFilter(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeNameFilter, changePhoneFilter } = slice.actions;

export const filtersSlice = slice.reducer;
