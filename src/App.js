import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { Home, About, Project } from "./component/Nav";

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
              <Link className="drawer_Item" to="/">
                Home
              </Link>
              <Link className="drawer_Item" to="/about">
                About
              </Link>
              <Link className="drawer_Item" to="/project">
                Project
              </Link>
            </Drawer>
            <Content>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/project" component={Project} />
              </div>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}
