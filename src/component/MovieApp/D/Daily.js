import React from "react";
import Axios from "axios";

import { MainURL, Key, TargetDt } from "../lib";

import DList from "./DList";
import "../W/MovieApp.css";

console.log(TargetDt);
export default class DailyMovie extends React.Component {
  state = {
    daily: "",
    dList: [],
    isLoading: true
  };

  getDailyList = async () => {
    const url = `${MainURL}/searchDailyBoxOfficeList.json?key=${Key}&targetDt=${TargetDt}`;

    await Axios.get(url)
      .then(res => res.data)
      .then(data => {
        this.setState({
          daily: data.boxOfficeResult,
          dList: data.boxOfficeResult.dailyBoxOfficeList,
          isLoading: false
        });

        console.log(this.state.daily);
        console.log(this.state.dList);
      });
  };

  componentDidMount() {
    this.getDailyList();
  }

  render() {
    const { daily, dList, isLoading } = this.state;
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
            <div className="type">
              <h3>{daily.boxofficeType}</h3>
            </div>
            <h5>Date: {daily.showRange}</h5>
            <div className="movies">
              {dList.map((movie, index) => (
                <DList
                  id={movie.id}
                  key={index}
                  title={movie.movieNm}
                  Open={movie.openDt}
                  rank={movie.rank}
                  people={movie.audiAcc}
                  point={movie.showCnt}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
