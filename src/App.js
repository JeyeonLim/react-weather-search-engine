import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="hamburg" />
        <footer>
          This project is coded by Jeyeon Lim and{" "}
          <a
            href="https://github.com/JeyeonLim/react-weather-search-engine "
            target="_blank"
            rel="noreferrer"
          >
            open-sourced by Github
          </a>
        </footer>
      </div>
    </div>
  );
}
