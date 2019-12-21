import React from "react";
import { Link } from "react-router-dom";
import firestore from "./Firebase/Firebase";

export default class BoardApp extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firestore.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { title, descript, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // Document Sanpshot
        title,
        descript,
        author
      });
    });
    this.setState({ boards });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { boards } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">게시판</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/create">글쓰기</Link>
            </h4>
            <table className="table table-strip">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>내용</th>
                  <th>작성자</th>
                </tr>
              </thead>
              <tbody>
                {boards.map(board => (
                  <tr>
                    <td>
                      <Link to={`/show/${board.key}`}>{board.title}</Link>
                    </td>
                    <td>{board.descript}</td>
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
