/** @format */
import React from "react";
import Comment from "./Comment";
import Logo from "./Logo";
import CreateComment from "./CreateComment";
import { themes, ThemeContext } from "../../js/theme-context";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
      comments: this.props.comments,
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments,
    });
  }

  render() {
    return (
      <div className="comments container">
        <div className="comments__logo">
          <Logo title={this.props.title}></Logo>
        </div>
        <ThemeContext.Provider value={this.state.theme}>
          <div className="comments__items">
            {this.state.comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  user={comment.user}
                  content={comment.content}
                  img={comment.img}
                ></Comment>
              );
            })}
          </div>
        </ThemeContext.Provider>
        <CreateComment
          onCommentSubmit={this.handleCommentSubmit}
        ></CreateComment>
      </div>
    );
  }
}

export default CommentBox;
