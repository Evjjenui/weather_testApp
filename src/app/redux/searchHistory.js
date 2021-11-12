import { createSlice } from "@reduxjs/toolkit";

export const searchHistory = createSlice({
  name: 'history',
  initialState: {
    initialCity: '',
    list: []
  },
  reducers: {
    searchList: (state, action) => {
      state.list = [...state.list, action.payload].sort((a, b) => {return b.date - a.date})
    },
  }
})

export const { searchList } = searchHistory.actions

export default searchHistory.reducer
