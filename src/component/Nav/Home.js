import React from "react";

import "./Home.css";
import Clock from "../Clock/Clock";
import Weather from "../Location/Weather";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home_text">
        <Weather />
        <h2>This is Home</h2>
        <Clock />
      </div>
    );
  }
}
