import React from "react";
import Axios from "axios";

const App_Id = "be70cc0b47a6331dc61023d7137347cb";

export default class TESTOWA20191218 extends React.Component {
  state = {
    weather: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this._getWeather(position.coords, position.coords);
      },
      error => {
        console.log(error);
      }
    );
  }

  _getWeather = ({ latitude, longitude }) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${App_Id}`;
    Axios.get(url)
      .then(res => res.data)
      .then(data => console.log(data));
  };

  render() {
    return <div></div>;
  }
}

/*
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
  };
*/

/*
handleGeoSucces(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    this.setState({
      lat: lat,
      lon: lon
    });
    console.log(this.state);
  }

  handleGeoError() {
    console.log("위치 정보 찾을 수 없음.");
  }

  askForCoords() {
    navigator.geolocation.getCurrentPosition(
      this.handleGeoSucces,
      this.handleGeoError
    );
  }

  loadCoords() {
    const loadCoords = this.handleGeoSucces;
    if (loadCoords === null) {
      this.askForCoords();
    } else {
      // get Weather
      const { lat, lon } = this.state;
      this.getWeather(lat, lon);
    }
  }
*/
