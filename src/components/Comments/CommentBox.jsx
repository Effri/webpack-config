import Comment from "./Comment.jsx";
import Logo from "./Logo.jsx";
import CreateComment from "./CreateComment.jsx";

const data = {
  logo: {
    title: "Заголовок показательного компонента",
  },

  comments: [
    {
      img: "./assets/img/example.jfif",
      user: "Kyzinatra",
      id: 0,
      content:
        "Чтобы начать разработку удалите файлы ./src/components/Comments, sass/modules/example.sass И начните делать свой проект на React!",
    },
    {
      img: "./assets/img/example2.jfif",
      user: "Danil",
      id: 1,
      content:
        "Это мой комментарий и он создан с помощью React! Несет исключительно показательный характер",
    },
  ],
};

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

ReactDOM.render(
  <CommentBox title={data.logo.title} comments={data.comments}></CommentBox>,
  document.querySelector("#Expamle")
);
