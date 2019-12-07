import React from "react";

export default function WeekList({ title, open, rank, people, point }) {
  return (
    <div className="movie">
      <div className="data">
        <a
          href={`https://search.naver.com/search.naver?${encodeURI(
            `sm=top_hty&fbm=1&ie=utf8&query=${title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>순 위 : {rank}</h4>
          <h4>영화제목 : {title}</h4>
          <h4>개봉일자 : {open}</h4>
          <h4>상영횟수 : {point}</h4>
          <h4>누적관객 : {people}명</h4>
        </a>
      </div>
    </div>
  );
}
