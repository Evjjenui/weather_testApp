import { createSlice } from "@reduxjs/toolkit";
import  { searchList } from "../redux/searchHistory"

export const weatherForecast = createSlice({
  name: 'forecast',
  initialState: {
    city: 'Kyiv',
    loading: 'idle',
    weatherData: null,
    errorMessage: null
  },

  reducers: {
    isLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.city = action.payload
      }
    },
    dataRecieved(state, action) {
      if (state.loading === 'pending') {
        state.weatherData = action.payload
        state.loading = 'idle'
      }
    },
    errorRecieved(state, action) {
      state.errorMessage = action.payload
    }
  }
})

export const { isLoading, dataRecieved, errorRecieved } = weatherForecast.actions

export const weatherFetch = (city, newItem) => async(dispatch) => {
  dispatch(isLoading(city))
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  if (response.ok) {
    const data = await response.json()
    dispatch(dataRecieved(data))
    dispatch(errorRecieved(null));
    if (newItem) {
      dispatch(searchList(newItem))
    }
  } else {
    dispatch(errorRecieved('Error: Wrong City Name'));
  }
}

export default weatherForecast.reducer
