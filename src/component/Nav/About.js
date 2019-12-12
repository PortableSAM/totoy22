import React from "react";
import { Grid, Cell } from "react-mdl";
import { Education, Career } from "../About";

import "./About.css";
export default class About extends React.Component {
  render() {
    return (
      <div className="about_body">
        <Grid>
          <Cell className="about_left_col" col={4}>
            <div className="left_float">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src="https://svgsilh.com/svg/156584.svg"
                atl=""
                style={{
                  height: "200px",
                  borderRadius: "10em",
                  paddingTop: "10px"
                }}
              />
            </div>
            <h2>이 한 샘</h2>
            <h4>프론트 앤드 개발자 준비중</h4>
            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <p>
              <i className="fas fa-envelope-open" aria-hidden="true" />{" "}
              hanmti00@naver.com
            </p>
            <p>
              <i className="fab fa-github-square" aria-hidden="true" />{" "}
              PortableSAM
            </p>
            <hr style={{ borderTop: "3px solid #833fb2" }} />
          </Cell>
          <Cell className="about_right_col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2004}
              endYear={2007}
              schoolName={"YongSan Technical High School"}
              Department={"Electron department"}
            />
            <hr style={{ borderTop: "2px solid #076585" }} />
            <h2>Social Experience</h2>
            <Career
              startYear={2018}
              endYear={2019}
              jobName={"jin-heung Technology"}
              description={
                "Gas scrubber Maintenance and Vacuum pump Maintenance"
              }
            />
            <Career
              startYear={2017.04}
              endYear={2017.12}
              jobName={"Dajin Digital Solution"}
              description={"Office Complex Maintenance Printer Repair"}
            />
            <Career
              startYear={2009}
              endYear={2016}
              jobName={"Republic of Korea, Army"}
              description={"Army Field Artillery, Maintenance Team"}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
