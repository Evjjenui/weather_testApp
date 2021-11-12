import React, { useEffect } from "react";
import  { weatherFetch } from "../redux/weatherSearch"
import { useDispatch, useSelector } from "react-redux";
import { CityWeather } from "./parts/CityWeather";

const WeatherSearch = () => {
  const { weatherData, errorMessage :error, city, loading } = useSelector(state => state.forecast)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(weatherFetch(city))
  }, [dispatch]);
  
  const submitHandler = (e) => {
    e.preventDefault()
    const cityName = e.target[0].value

    dispatch(weatherFetch(cityName, cityName))
  }

  return (
    <div className="forecast">
      <div className="forecast-form">
        {(loading === 'pending') && <p className="loading">Loading Data...</p>}
        <form action="" onSubmit= { submitHandler }>
          <input
            type = "text"
            placeholder = 'Enter city name'
            />
          <button>Search</button>

          { error && <p className='error'>{ error }</p> }
        </form>
      </div>
      
      { weatherData && <CityWeather 
        cityName = { weatherData.city.name }
        temperature = { weatherData.list[0].main.feels_like }
      />}
    </div>
  )
}

export default WeatherSearch;
