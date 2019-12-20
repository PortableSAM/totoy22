import React from "react";
import { Route } from "react-router-dom";
import { Edit, Create, Show, BoardList } from "./index";

export default class BoardApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/Board" component={BoardList} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
        <Route path="/show/:id" component={Show} />
      </div>
    );
  }
}
