import React from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

import Daily from "../MovieApp/D/Daily";
import Weekly from "../MovieApp/W/Week";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }
  toggleCategori() {
    if (this.state.activeTab === 1) {
      return (
        <div>
          <Daily />
        </div>
      );
    } else if (this.state.activeTab === 0) {
      return (
        <div>
          <Weekly />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="categori_tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Weekly</Tab>
          <Tab>Daily</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="project_content">{this.toggleCategori()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
