import React from "react";
import Axios from "axios";

import { MainURL, Key, TargetWt } from "../lib";
import WeekList from "./WeekList";
import "./MovieApp.css";
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
      .then(data => {
        this.setState({
          weekly: data.boxOfficeResult,
          wList: data.boxOfficeResult.weeklyBoxOfficeList,
          isLoading: false
        });
        console.log(this.state.weekly);
        console.log(this.state.wList);
      });
  };

  componentDidMount() {
    this.getWeeklyList();
  }

  render() {
    const { weekly, wList, isLoading } = this.state;
    if (wList.length > 0) {
      return (
        <div>
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">
                <h2>Data Loading</h2>
              </span>
            </div>
          ) : (
            <div>
              <div>
                <h3>{weekly.boxofficeType}</h3>
                <h5>{weekly.showRange}</h5>
              </div>
              <div className="wMovies">
                {wList.map((weeklyMovie, index) => (
                  <WeekList
                    id={weeklyMovie.id}
                    key={index}
                    title={weeklyMovie.movieNm}
                    open={weeklyMovie.openDt}
                    rank={weeklyMovie.rank}
                    people={weeklyMovie.audiAcc}
                    point={weeklyMovie.showCnt}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">
                <h2>Data Loading</h2>
              </span>
            </div>
          ) : (
            <div>
              <div className="not_container">
                <h3>{weekly.boxofficeType}</h3>
              </div>
              <span className="gathering_data">
                <h3>** Gathering data **</h3>
              </span>
            </div>
          )}
        </div>
      );
    }
  }
}
