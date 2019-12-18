import React from "react";

class GetCurrent extends React.Component {
  state = {
    lat: 0,
    lon: 0
  };

  getPosition() {
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
  }
}

export default GetCurrent;
