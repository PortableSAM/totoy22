import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Create, Edit, Show } from "./BoardForm/index";
import BoardApp from "./BoardApp";

export default class Board extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/Board" component={BoardApp} />
          <Route path="/Board/edit/:id" component={Edit} />
          <Route path="/Board/create" component={Create} />
          <Route path="/Board/show/:id" component={Show} />
        </div>
      </Router>
    );
  }
}
