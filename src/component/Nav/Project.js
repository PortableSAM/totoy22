import React from "react";
import Daily from "../MovieApp/D/Daily";
import Weekly from "../MovieApp/W/Week";

export default class Project extends React.Component {
  render() {
    return (
      <div>
        <Daily />
        <Weekly />
      </div>
    );
  }
}
