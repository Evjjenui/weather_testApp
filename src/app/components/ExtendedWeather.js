import React from "react";
import { useSelector } from "react-redux";
import { extendedData } from "../redux/selector/extendedDataSelector";

const ExtendedWeather = () => {
  const data = useSelector(extendedData);

  if (data) {
    return (
      <div className="extended-forecast">
        {data.map((item) => {
          const date = new Date(item.dt * 1000);
          const fullDateName = new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          })
            .format(date)
            .split(",")[0];
          const temperature = Math.round(item.main.temp);
          const humidity = item.main.humidity;

          return (
            <div className="extended-forecast__item" key={item.dt}>
              <p className="date">{fullDateName}</p>
              <p className="temperature">
                {temperature} <sup>o</sup>C
              </p>
              <p className="additional-info">Wind: {item.wind.speed} m/s</p>
              <p className="additional-info">Humidity: {humidity}%</p>
            </div>
          );
        })}
      </div>
    );
  }

  return <p>Loading ...</p>;
};

export default ExtendedWeather;
