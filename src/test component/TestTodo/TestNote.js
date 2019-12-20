import React, { Component } from "react";
import "./TestNote.css";
import PropTypes from "prop-types";

export default class TestNote extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    this.props.removeNote(id);
  }

  render(props) {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveNote(this.noteId)}
        >
          <i className="fas fa-eraser" />
        </span>
        <p className="noteContent">{this.noteContent}</p>
      </div>
    );
  }
}

TestNote.propTypes = {
  noteContent: PropTypes.string
};
