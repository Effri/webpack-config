/** @format */

import Comment from "./Comment";
import Logo from "./Logo";
import CreateComment from "./CreateComment";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <CreateComment
          onCommentSubmit={this.handleCommentSubmit}
        ></CreateComment>
      </div>
    );
  }
}
CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentBox;
