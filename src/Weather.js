import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherdata, setWeatherdata] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.name);
    setWeatherdata({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="Weather">
          <form className="form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  value="Enter a city"
                  className="form-control"
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
          </form>
          <div>
            <h1 className="city">{weatherdata.city}</h1>
            <ul>
              <li>Wednesday 10:10</li>
              <li className="text-capitalize">{weatherdata.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="partly cloudy"
                />{" "}
                <span className="temperature">{weatherdata.temperature}</span>
                <span className="unit">°C</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherdata.humidity}%</li>
                  <li>Wind: {weatherdata.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer>
          This projected is coded by Jeyeon Lim and{" "}
          <a
            href="https://github.com/JeyeonLim/react-weather-search-engine "
            target="_blank"
            rel="noreferrer"
          >
            open-sourced by Github
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "445c7163cebd4264ef3f8436bcb8200c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
