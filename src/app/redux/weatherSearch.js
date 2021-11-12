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
      state.loading = 'pending'
      state.city = action.payload
    },
    dataRecieved(state, action) {
      state.weatherData = action.payload
      state.loading = 'idle'
      state.errorMessage = null
    },
    errorRecieved(state, action) {
      state.errorMessage = action.payload
      state.loading = 'idle'
    }
  }
})

export const { isLoading, dataRecieved, errorRecieved } = weatherForecast.actions

export const weatherFetch = (city) => async(dispatch) => {
  dispatch(isLoading(city))
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  if (response.ok) {
    const data = await response.json()
    dispatch(dataRecieved(data))
    dispatch(searchList(city))
  } else {
    dispatch(errorRecieved('Error: Wrong City Name'));
  }
}

export default weatherForecast.reducer
