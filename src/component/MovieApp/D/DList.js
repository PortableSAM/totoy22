import React from "react";

export default function Dlilst({ title, Open, rank, people, point }) {
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
          <h3>순 위 : {rank}</h3>
          <h3>영화제목 : {title}</h3>
          <h3>개봉일자 : {Open}</h3>
          <h4>상영횟수 : {point}</h4>
          <h4>누적관객 : {people}명</h4>
        </a>
      </div>
    </div>
  );
}
