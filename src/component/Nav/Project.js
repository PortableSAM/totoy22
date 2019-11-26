import React from "react";
import Daily from "../MovieApp/D/Daily";
import Weekly from "../MovieApp/W/Week";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }
  render() {
    return (
      <div>
        <Daily />
        <Weekly />
      </div>
    );
  }
}
