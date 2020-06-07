/** @format */

import React from "react";
import { themes, ThemeContext } from "../../js/theme-context";

function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__user" id="">
        <div className="comment__user-avatar">
          <img src={props.img || "./assets/img/example.jfif"} alt="" />
        </div>
        <div className="comment__user-nickname">{props.user}</div>
      </div>
      <div className="comment__content">{props.content}</div>
      <ThemeContext.Consumer>
        {(val) => <b>{val.background}</b>}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Comment;
