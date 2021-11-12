import { createSelector } from "@reduxjs/toolkit";

const selectWeather = (state) => state.forecast.weatherData;

export const extendedData = createSelector(selectWeather, (data) => {
  if (!data) {
    return null;
  }

  return data.list.filter((value, index, array) => {
    return index % 8 === 0;
  });
});
