import React from "react";
import { useSelector } from "react-redux";

const ExtendedWeather = () => {
  const { weatherData } = useSelector(state => state.forecast)
  
  if (weatherData) {
    const extendedData = weatherData.list.filter((value, index, array) => {return index % 8 === 0})
    
    return (
      <div className='extended-forecast'>
        {extendedData.map(item => {
          const date = new Date(item.dt * 1000).toString().split(' ')[0]
          const temperature = Math.round(item.main.temp - 273)
          const humidity = item.main.humidity

          return (
            <div
              className='extended-forecast__item'
              key={item.dt}>
              <p className="date">{date}</p>
              <p className="temperature">
                { temperature } <sup>o</sup>C
              </p>
              <p className="additional-info">Wind: {item.wind.speed} m/s</p>
              <p className="additional-info">Humidity: {humidity}%</p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <p>Loading ...</p>
  )
}

export default ExtendedWeather;
