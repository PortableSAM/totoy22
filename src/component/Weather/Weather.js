import React from "react";
import "./Weather.css";
import { Grid, Cell } from "react-mdl";
import Key from "./WthrKey";

export default class Weather extends React.Component {
  state = {
    data: "",
    temp: 0,
    condition: "",
    location: "",
    discript: "",
    icon: null
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Key}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        this.setState({
          data: json,
          temp: json.main.temp,
          condition: json.weather[0].main,
          location: json.name,
          discript: json.weather[0].description,
          icon: json.weather[0].icon
        });
        console.log(this.state);
      });
  };

  render() {
    const { temp, condition, location, discript, icon } = this.state;
    return (
      <div className="weather_container">
        <div className="weather_title">
          <h5>Current Weather</h5>
        </div>
        <div
          className="weather_condition"
          style={{ width: "100%", margin: "auto" }}
        >
          <Grid>
            <Cell className="weather_left" col={8}>
              <p>장소: {location}</p>
              <p>
                기상: {condition}, {discript}
              </p>
              <p>온도: {temp}℃</p>
            </Cell>
            <Cell className="weather_right" col={4}>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt="wthr_img"
              />
            </Cell>
          </Grid>
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
