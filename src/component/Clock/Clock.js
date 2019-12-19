import React from "react";
import moment from "moment";
import "moment/locale/ko";

export default class Clock extends React.Component {
  state = {
    time: "",
    day: "",
    connecting: true
  };
  getClock = () => {
    const day = moment().format("LL");
    const time = moment().format("LT");
    this.setState({
      day,
      time,
      connecting: false
    });
  };

  componentDidMount() {
    setInterval(this.getClock, 1000);
  }

  render() {
    const { day, time, connecting } = this.state;

    return (
      <div>
        {connecting ? (
          <div className="connect">
            <span className="connect_text">
              <h2>Connecting</h2>
            </span>
          </div>
        ) : (
          <div className="container">
            <div className="date">
              <h2>{day}</h2>
              <div className="time">
                <h2>현재시간 {time}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
