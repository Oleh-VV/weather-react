import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Day(props) {
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

  return (
    <div className="day-block">
      <p>{props.day}</p>
      <ReactAnimatedWeather
        icon={iconMathing[props.icon]}
        color={props.color}
        size={30}
        animate={true}
      />
      <p>
        <span className="min-temp">{props.tempMin} &#176; </span>
        <span className="max-temp"> {props.tempMax} &#176;</span>
      </p>
    </div>
  );
}
