import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <h1>Hamburg</h1>
      <ul>
        <li>Wednesday 10:10</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />{" "}
          <span className="temperature">19</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 51%</li>
            <li>Wind: 21km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
