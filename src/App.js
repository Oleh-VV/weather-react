import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Display from "./Display.js";
import Cities from "./Cities.js";
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
    //setDisplayItems((previousState) => {return { ...previousState, city: [searchInputValue] };});
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
          <input type="button" value="current" />
        </form>
        <div className="middle-block">
          <Display propsObj={displayItems} />
          <Cities propsObj={displayItems} />
        </div>
        <Forecast />
      </div>
    );
  } else {
    getWeatherInfo(displayItems.city);
    return "Loading ...";
  }
}
export default App;
