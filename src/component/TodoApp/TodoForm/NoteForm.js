import React from "react";
import "./NoteForm.css";

export default class TestNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }
  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value //the value of the text input
    });
  }

  writeNote() {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addNote(this.state.newNoteContent);
    // Set newNoteContent back to an empty string.
    this.setState({
      newNoteContent: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Write a new Task..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button className="noteBtn" onClick={this.writeNote}>
          Add Note
        </button>
      </div>
    );
  }
}
