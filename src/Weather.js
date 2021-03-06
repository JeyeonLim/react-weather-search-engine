import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultcity);
  const [weatherdata, setWeatherdata] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function citySearch() {
    const apiKey = "445c7163cebd4264ef3f8436bcb8200c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    citySearch();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }
  if (weatherdata.ready) {
    return (
      <div className="App">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={cityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
            <WeatherInfo data={weatherdata} />
            <WeatherForecast coordinates={weatherdata.coordinates} />
          </form>
        </div>
      </div>
    );
  } else {
    citySearch();
    return "Loading...";
  }
}
