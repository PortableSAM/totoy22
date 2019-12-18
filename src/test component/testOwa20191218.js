import React from "react";

const App_Id = "be70cc0b47a6331dc61023d7137347cb";

export default class TESTOWA20191218 extends React.Component {
  state = {
    data: "",
    temp: 0,
    condition: "",
    location: ""
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
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${App_Id}`
    )
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        this.setState({
          data: json,
          temp: json.main.temp,
          condition: json.weather[0].main,
          location: json.name
        });
        console.log(this.state);
      });
  };

  render() {
    const { temp, condition, location } = this.state;
    return (
      <div className="container">
        <div className="weather_loca">
          <p>장소: {location}</p>
        </div>
        <div className="weather_condition">
          <p>기상: {condition}</p>
          <p>온도: {temp}</p>
        </div>
      </div>
    );
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
