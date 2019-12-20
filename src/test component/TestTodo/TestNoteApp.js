import React from "react";
import TestNote from "./TestNote";

export default class TestNoteApp extends React.Component {
  render() {
    return (
      <div>
        <h1>React & Firebase To-Do List</h1>
        <TestNote />
      </div>
    );
  }
}
