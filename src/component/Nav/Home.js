import React from "react";

import "./Home.css";
import Clock from "../Clock/Clock";
import Weather from "../Weather/Weather";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home_text">
        <h2>Welcome to my page</h2>
        <Clock />
        <Weather />
      </div>
    );
  }
}
