import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Project from "./component/Project";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Header>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
              </Navigation>
            </Header>
          </Layout>
        </div>
      </Router>
    );
  }
}
