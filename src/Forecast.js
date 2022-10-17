import React, { useState, useEffect } from "react";
import Day from "./Day.js";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forcastData, setForcastData] = useState(null);
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  function getDay(dt) {
    let date = new Date(dt * 1000);
    return date.getDay();
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.lon, props.lat]);
  function handleResp(response) {
    setForcastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="forecast-block">
        {days.map((dayName, index) => {
          if (index < 5) {
            return (
              <Day
                day={days[getDay(forcastData[index].dt)]}
                tempMin={Math.round(forcastData[index].temp.min)}
                tempMax={Math.round(forcastData[index].temp.max)}
                color="blue"
                icon={forcastData[index].weather[0].icon}
                key={index}
              />
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "ae0d6c1e0f247031b20f4e5e8d4b4dc6";
    let lon = props.lon;
    let lat = props.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => handleResp(response));
    return null;
  }
}
