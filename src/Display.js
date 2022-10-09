import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Display(props) {
  let curday = new Date(props.propsObj.data * 1000).getDay();
  let minutes = new Date(props.propsObj.data * 1000).getMinutes();
  let hours = new Date(props.propsObj.data * 1000).getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Setcurdate = `${week[curday]} ${hours}:${minutes}`;
  let iconMathing = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_Night",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_Night",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_Night",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  let [unit, setUnit] = useState("cels");
  let temperatureC = props.propsObj.temp;
  let temperatureF = Math.round((temperatureC * 9) / 5 + 32);
  let temperature = temperatureC;
  if (unit === "far") {
    temperature = temperatureF;
  }
  //<img src={props.propsObj.iconUrl} alt="weather icon" />
  return (
    <div className="display">
      <div className="main-info">
        <h1>{props.propsObj.city}</h1>
        <h3 className="date">{Setcurdate}</h3>
        <h3 className="description">{props.propsObj.desc}</h3>
        <div className="image-temp-block">
          <ReactAnimatedWeather
            icon={iconMathing[props.propsObj.icon]}
            color="orange"
            size={40}
            animate={true}
          />
          <p>
            <span> {temperature}</span> &#176;
            <span className="btntemp " onClick={() => setUnit("cels")}>
              C{" "}
            </span>
            |
            <span className="btntemp" onClick={() => setUnit("far")}>
              {" "}
              F
            </span>
          </p>
        </div>
      </div>
      <div className="list-info">
        <ul>
          <li className="wind">Wind: {props.propsObj.wind} km/h</li>
          <li className="humidity">Humidity: {props.propsObj.humidity} %</li>
        </ul>
      </div>
    </div>
  );
}
