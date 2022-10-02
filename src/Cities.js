import React from "react";
import City from "./City.js";

export default function Cities() {
  return (
    <div className="cities-block">
      <City cityname="Riga" />
      <City cityname="Toronto" />
      <City cityname="Paris" />
      <City cityname="London" />
      <City cityname="Kyiv" />
    </div>
  );
}
