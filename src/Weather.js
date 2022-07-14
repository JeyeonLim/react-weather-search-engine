import React from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
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
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo />
      </div>
      <footer>
        This projected is coded by Jeyeon Lim and is{" "}
        <a
          href="https://github.com/JeyeonLim/react-weather-search-engine"
          target="_blank"
        >
          open-sourced by Github
        </a>
      </footer>
    </div>
  );
}
