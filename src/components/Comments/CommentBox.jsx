/** @format */
import React, { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import Logo from "./Logo";
import CreateComment from "./CreateComment";
import { themes, ThemeContext } from "../../js/theme-context";

function CommentBox(props) {
  const [comments, setComments] = useState(props.comments);
  const handleCommentSubmit = (c) => setComments(comments.concat([c]));

  return (
    <div className="comments container">
      <div className="comments__logo">
        <Logo title={props.title}></Logo>
      </div>
      <ThemeContext.Provider value={themes.dark}>
        <div className="comments__items">
          {comments.map((comment) => {
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
      <CreateComment onCommentSubmit={handleCommentSubmit}></CreateComment>
    </div>
  );
}

export default CommentBox;
