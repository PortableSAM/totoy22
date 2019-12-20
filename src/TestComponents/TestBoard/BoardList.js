import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./../FireStore/Firebase";

export default class BoardList extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author
      });
    });
    this.setState({
      boards
    });
  };
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="boardList_container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Board List</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/create">Add Board</Link>
            </h4>
            <table className="table table-strip">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Descript</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board => (
                  <tr>
                    <td>
                      <Link to={`/show/${board.key}`}>{board.title}</Link>
                    </td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
