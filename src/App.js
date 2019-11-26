import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Project from "./component/Project";
import About from "./component/About";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Header title="Build App" scroll>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
              </Navigation>
            </Header>
            <Drawer title="Build App">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/project">Project</Link>
            </Drawer>
            <Content>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project" component={Project} />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}
