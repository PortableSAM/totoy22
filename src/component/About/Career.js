import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Career extends Component {
  render() {
    return (
      <div>
        <Grid className="Career_grid">
          <Cell col={4}>
            <p>
              {this.props.startYear} ~ {this.props.endYear}
            </p>
          </Cell>
          <Cell col={8}>
            <p>{this.props.jobName}</p>
            <p>{this.props.description}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Career;
