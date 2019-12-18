import React from "react";

import "./Home.css";
import Clock from "../Clock/Clock";
import TESTOWA20191218 from "../../test component/testOwa20191218";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home_text">
        <TESTOWA20191218 />
        <h2>This is Home</h2>
        <Clock />
      </div>
    );
  }
}
