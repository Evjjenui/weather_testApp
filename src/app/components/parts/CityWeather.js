import React from "react";

export const CityWeather = ({ cityName, temperature }) => {
  return (
    <div className="city-weather">
      <strong> { cityName }(today): { Math.round(temperature - 273) }<sup>o</sup>C</strong>
    </div>
  )
}
