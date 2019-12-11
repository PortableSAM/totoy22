import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <div>
        <Grid className="Edu_grid">
          <Cell col={4}>
            <p>
              {this.props.startYear} ~ {this.props.endYear}
            </p>
          </Cell>
          <Cell col={8}>
            <p>{this.props.schoolName}</p>
            <p>{this.props.Department}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
