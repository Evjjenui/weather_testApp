import React, { useEffect, useState } from "react";
import  { weatherFetch } from "../redux/weatherSearch"
import  { searchList } from "../redux/searchHistory"
import { useDispatch, useSelector } from "react-redux";
import { CityWeather } from "./parts/CityWeather";

const WeatherSearch = () => {
  const [cityName, setCityName] = useState('Kyiv');
  const [city, setCity] = useState('Kyiv');
  const data = useSelector(state => state.forecast.weatherData)
  const error = useSelector(state => state.forecast.errorMessage)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(weatherFetch(cityName))
  }, [dispatch]);
  
  const submitHandler = (e) => {
    e.preventDefault()
    setCity(cityName)
    
    const newItem = {
      cityName: cityName,
      date: new Date().toISOString().slice(0, 10),
      id: Date.now()
    }

    dispatch(weatherFetch(cityName))
    // TODO
    dispatch(searchList(newItem))
  }

  if (data.length === 0) {

    if (data.loading === 'pending') {

      return (
        <div className="temperature">
          <h1> Loading... </h1>
        </div>
      )
    } else if (error) {
      return (
        <div className="temperature">
          <h1> {error.message} </h1>
        </div>
      )
    }
  }

  return (
    <div className="temperature">
      <form action="" onSubmit= { submitHandler }>
        <input
          type = "text"
          placeholder = 'Enter city name'
          onChange = { (e) => setCityName(e.target.value) }
          />
        <button>Find</button>
      </form>
      
      <CityWeather 
        cityName = { city }
        temperature = { data.main.temp }
      />
      
    </div>
  )
}

export default WeatherSearch;
