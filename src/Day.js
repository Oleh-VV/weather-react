import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Day(props) {
  return (
    <div className="day-block">
      <p>{props.day}</p>
      <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={30}
        animate={true}
      />
      <p>{props.temp} &#176;</p>
    </div>
  );
}
