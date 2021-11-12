import React, { useEffect } from "react";
import { weatherFetch } from "../redux/weatherSearch";
import { useDispatch, useSelector } from "react-redux";
import { CityWeather } from "./CityWeather";

const WeatherSearch = () => {
  const {
    weatherData,
    errorMessage: error,
    city,
    loading,
  } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherFetch(city));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const cityName = e.target[0].value;

    dispatch(weatherFetch(cityName));
  };

  return (
    <div className="forecast">
      <div className="forecast-form">
        {loading === "pending" && <p className="loading">Loading Data...</p>}
        <form action="" onSubmit={submitHandler}>
          <div className="form-item">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="icon-magnifier-usage"
            >
              <path d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 110-14 7 7 0 010 14z"></path>
            </svg>
            <input type="text" placeholder="Enter city name" />
            <button>Search</button>

            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>

      {weatherData && (
        <CityWeather
          cityName={weatherData.city.name}
          temperature={weatherData.list[0].main.feels_like}
        />
      )}
    </div>
  );
};

export default WeatherSearch;
