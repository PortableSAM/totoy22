import React from "react";
import moment from "moment";
import "moment/locale/ko";

export default class Clock extends React.Component {
  state = {
    time: "",
    connecting: true
  };
  getClock = () => {
    const time = moment().format("LTS");
    this.setState({
      time,
      connecting: false
    });
  };

  componentDidMount() {
    setInterval(this.getClock, 1000);
  }
  render() {
    const { time, connecting } = this.state;

    return (
      <div>
        {connecting ? (
          <div className="connect">
            <span className="connect_text">
              <h2>Connecting</h2>
            </span>
          </div>
        ) : (
          <div className="time">
            <h2>현재시간 {time}</h2>
          </div>
        )}
      </div>
    );
  }
}
