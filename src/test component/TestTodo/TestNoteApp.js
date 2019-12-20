import React from "react";
import TestNote from "./TestNote";
import "./TestNoteApp.css";

export default class TestNoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1" },
        { id: 2, noteContent: "Note 2" }
      ]
    };
  }
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <h1>React & Firebase To-Do List</h1>
        </div>
        <div className="notesBody">
          {this.state.notes.map(note => {
            return (
              <TestNote
                noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
              />
            );
          })}
        </div>
        <div className="notesFooter">Footer is here!!!</div>
      </div>
    );
  }
}
