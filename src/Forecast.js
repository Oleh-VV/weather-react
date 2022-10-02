import React from "react";
import Day from "./Day.js";

export default function Forecast() {
  return (
    <div className="forecast-block">
      <Day day="Sun" temp="15" color="blue" icon="CLOUDY" />
      <Day day="Mon" temp="16" color="orange" icon="CLEAR_DAY" />
      <Day day="Tue" temp="11" color="blue" icon="PARTLY_CLOUDY_DAY" />
      <Day day="Wed" temp="10" color="blue" icon="CLOUDY" />
      <Day day="Thu" temp="8" color="black" icon="RAIN" />
    </div>
  );
}
