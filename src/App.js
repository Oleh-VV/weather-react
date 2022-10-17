import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Display from "./Display.js";
import Forecast from "./Forecast.js";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  function handleSearchInput(e) {
    setSearchInputValue(e.target.value);
  }
  const [displayItems, setDisplayItems] = useState({
    temp: "",
    desc: "",
    wind: "",
    humidity: "",
    city: "Kyiv",
    data: "",
    iconUrl: "",
    lon: "",
    lat: "",
  });
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    setDisplayItems({
      temp: [Math.round(response.data.main.temp)],
      wind: [response.data.wind.speed],
      humidity: [response.data.main.humidity],
      desc: [response.data.weather[0].main],
      city: [response.data.name],
      data: [response.data.dt],
      iconUrl: [
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ],
      icon: [response.data.weather[0].icon],
      lon: [response.data.coord.lon],
      lat: [response.data.coord.lat],
    });
    setReady(true);
  }
  function getWeatherInfo(city) {
    let apiKey = "ae0d6c1e0f247031b20f4e5e8d4b4dc6";
    let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlCity).then(handleResponse);
  }
  function handleForm(e) {
    e.preventDefault();
    getWeatherInfo(searchInputValue);
  }
  if (ready) {
    return (
      <div className="App">
        <form onSubmit={handleForm}>
          <input
            type="search"
            onChange={handleSearchInput}
            placeholder="Enter the city"
          />
          <input type="submit" value="search" />
        </form>
        <div className="middle-block">
          <Display propsObj={displayItems} />
        </div>
        <Forecast lat={displayItems.lat} lon={displayItems.lon} />
      </div>
    );
  } else {
    getWeatherInfo(displayItems.city);
    return "Loading ...";
  }
}
export default App;
