import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Display(props) {
  let curdate = "Sunday 17:45";
  //  const [curdate, Setcurdate] = useState("Sunday 17:45");
  //function showDate() {
  // let week = [ "Sunday","Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday",];
  //let date = new Date();
  //let minutes = date.getMinutes();
  //if (minutes < 10) { minutes = `0${minutes}`; }
  //let seconds = date.getSeconds();
  //if (seconds < 10) { seconds = `0${seconds}`; }
  //Setcurdate(`${week[date.getDay()]} ${date.getHours()}:${minutes}:${seconds}` ); }
  //setInterval(Setcurdate(() => showDate()),1000);
  return (
    <div className="display">
      <div className="main-info">
        <h1>{props.propsObj.city}</h1>
        <h3 className="date">{curdate}</h3>
        <h3 className="description">{props.propsObj.desc}</h3>
        <div className="image-temp-block">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="orange"
            size="40"
            animate="true"
          />
          <p>
            <span> {props.propsObj.temp}</span> &#176;C
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
