import React from "react";

export const CityWeather = ({ cityName, temperature }) => {
  return (
    <div className="weather-info">
      <h1> { cityName } </h1>
      {/* <h1> { Math.round(data.weatherData.main.temp) } </h1> */}
      <h1>
        { Math.round(temperature) } 
        <sup>o</sup>
        C
        </h1>
    </div>
  )
}
