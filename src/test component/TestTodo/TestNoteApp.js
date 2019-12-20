import React from "react";
import TestNote from "./TestNote";
import "./TestNoteApp.css";
import TestNoteForm from "../TestTodoForm/TestNoteForm";
import { DB_Config } from "../config/config";
import firebase from "firebase/app";
import "firebase/database";

export default class TestNoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(DB_Config);
    this.database = this.app
      .database()
      .ref()
      .child("notes");

    // We're going to setup the React state of our component
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    const previousNotes = this.state.notes;

    // DatabaseSnapshot
    this.database.on("child_added", snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      });
      this.setState({
        notes: previousNotes
      });
    });

    this.database.on("child_removed", snap => {
      for (let i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }
      this.setState({
        notes: previousNotes
      });
    });
  }

  addNote(note) {
    this.database.push().set({ noteContent: note });
  }

  removeNote(noteId) {
    this.database.child(noteId).remove();
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
                removeNote={this.removeNote}
              />
            );
          })}
        </div>
        <div className="notesFooter">
          <TestNoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}
