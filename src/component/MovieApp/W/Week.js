import React from "react";
import Axios from "axios";

import { MainURL, Key, TargetWt } from "../lib";
console.log(TargetWt);
export default class WeeklyMovie extends React.Component {
  state = {
    weekly: "",
    wList: [],
    isLoading: true
  };

  getWeeklyList = async () => {
    const url = `${MainURL}/searchWeeklyBoxOfficeList.json?key=${Key}&targetDt=${TargetWt}`;
    await Axios.get(url)
      .then(res => res.data)
      .then(data => console.log(data));
  };

  componentDidMount() {
    this.getWeeklyList();
  }

  render() {
    return <div></div>;
  }
}
