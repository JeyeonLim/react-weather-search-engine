import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];

    return day;
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div clasName="Forecast-temperature">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
        <span className="Forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
