import React from "react";
import Axios from "axios";

const App_Id = "be70cc0b47a6331dc61023d7137347cb";

export default class TESTOWA20191218 extends React.Component {
  state = {
    lat: 0,
    lon: 0
  };

  getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          console.log(this.state);
        },
        error => {
          console.log(error);
        }
      );
    }
    this.getWeather(this.state);
  };

  getWeather = () => {
    const { lat, lon } = this.state;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${App_Id}`;
    Axios.get(url)
      .then(res => res.data)
      .then(data => console.log(data));
  };

  componentDidMount() {
    this.getPosition();
  }

  render() {
    return <div></div>;
  }
}
