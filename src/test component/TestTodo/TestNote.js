import React, { Component } from "react";
import "./TestNote.css";
import PropTypes from "prop-types";

export default class TestNote extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
  }

  render(props) {
    return (
      <div className="note fade-in">
        <p className="noteContent">{this.noteContent}</p>
      </div>
    );
  }
}

TestNote.propTypes = {
  noteContent: PropTypes.string
};
