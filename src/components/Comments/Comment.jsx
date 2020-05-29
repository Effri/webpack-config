class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="comment__user" id="">
          <div className="comment__user-avatar">
            <img src={this.props.img || "./assets/img/example.jfif"} alt="" />
          </div>
          <div className="comment__user-nickname">{this.props.user}</div>
        </div>
        <div className="comment__content">{this.props.content}</div>
      </div>
    );
  }
}

Comment.propTypes = {
  img: PropTypes.any,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
