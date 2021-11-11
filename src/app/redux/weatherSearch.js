import { createSlice } from "@reduxjs/toolkit";

export const weatherForecast = createSlice({
  name: 'forecast',
  initialState: {
    loading: 'idle',
    weatherData: [],
    errorMessage: []
  },

  reducers: {
    isLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
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

export const weatherFetch = (city) => async(dispatch) => {
  dispatch(isLoading())
  try {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'Kyiv'}&units=metric&appid=056ec8951afa830cd6dd286d3b4d8725`)
    const data = await response.json()
    dispatch(dataRecieved(data))
  } catch (error) {
    dispatch(errorRecieved(error))
  }
}

export default weatherForecast.reducer
