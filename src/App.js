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
    temp: "20",
    desc: "Clear",
    wind: "5",
    humidity: "70",
    city: "Paris",
  });
  function handleResponse(response) {
    setDisplayItems({
      temp: [response.data.main.temp],
      wind: [response.data.wind.speed],
      humidity: [response.data.main.humidity],
      desc: [response.data.weather[0].main],
      city: [response.data.name],
    });
    //let date = new Date();
    //console.log(date);
  }
  function getWeatherInfo() {
    let apiKey = "ae0d6c1e0f247031b20f4e5e8d4b4dc6";
    let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${displayItems.city}&appid=${apiKey}&units=metric`;
    axios.get(urlCity).then(handleResponse);
  }
  function handleForm(e) {
    e.preventDefault();
    let promise = new Promise(function (resolve, reject) {
      setDisplayItems((previousState) => {
        return { ...previousState, city: [searchInputValue] };
      });
    });
    promise.then(getWeatherInfo());
  }
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
        <Cities />
      </div>
      <Forecast />
    </div>
  );
}

export default App;
