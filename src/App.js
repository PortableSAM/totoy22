import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { Home, About, BoxOffice } from "./component/Nav";
import NoteApp from "./component/TodoApp/Todo/NoteApp";
import BoardApp from "./TestComponents/TestBoard/BoardApp";

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
                <Link to="/BoxOffice">Box Office</Link>
                <Link to="/Note">ToDoList</Link>
                <Link to="/Board">TestBoard</Link>
              </Navigation>
            </Header>
            <Drawer title="Build App">
              <Link className="drawer_Item" to="/">
                Home
              </Link>
              <Link className="drawer_Item" to="/about">
                About
              </Link>
              <Link className="drawer_Item" to="/BoxOffice">
                Box Office
              </Link>
              <Link className="drawer_Item" to="/Note">
                ToDoList
              </Link>
              <Link className="drawer_Item" to="/Board">
                TestBoard
              </Link>
            </Drawer>
            <Content>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/BoxOffice" component={BoxOffice} />
              <Route path="/Note" component={NoteApp} />
              <Route path="/Board" component={BoardApp} />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}
