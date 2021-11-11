import React, { useEffect } from "react";
import  { weatherFetch } from "../redux/weatherSearch"
import  { searchList } from "../redux/searchHistory"
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

    const newItem = {
      cityName: cityName,
      date: new Date(Date.now()).toString(),
      id: Date.now()
    }

    dispatch(weatherFetch(cityName))
    dispatch(searchList(newItem))
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


          {/* {  (Object.keys(weatherData).length === 0) && <p>Empty data</p> } */}

          { error && <p className='error'>Error: { error.message }</p> }
        </form>
      </div>
      
      { weatherData && <CityWeather 
        cityName = { city }
        temperature = { weatherData.main.temp }
      />}
    </div>
  )
}

export default WeatherSearch;
