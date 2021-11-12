import { createSlice } from "@reduxjs/toolkit";

export const searchHistory = createSlice({
  name: "history",
  initialState: {
    list: [],
  },
  reducers: {
    searchList: (state, action) => {
      const newItem = {
        city: action.payload,
        date: Date.now(),
      };
      state.list = [...state.list, newItem];
    },
  },
});

export const { searchList } = searchHistory.actions;

export default searchHistory.reducer;
