import { createSlice } from "@reduxjs/toolkit";

export const searchHistory = createSlice({
  name: 'history',
  initialState: {
    initialCity: '',
    list: []
  },
  reducers: {
    searchList: (state, action) => {
      const newItem = {
        city: action.payload,
        date: Date.now()
      }
      state.list = [...state.list, newItem].sort((a, b) => {return b.date - a.date})
    },
  }
})

export const { searchList } = searchHistory.actions

export default searchHistory.reducer
