import React, { Component } from "react";
import "./TestNote.css";
import PropTypes from "prop-types";

export default class TestNote extends Component {
  constructor(props) {
    super(props);

    this.message = "hello Note Page";
  }

  render(props) {
    return (
      <div>
        <h1>{this.message}</h1>
      </div>
    );
  }
}

TestNote.propTypes = {};
