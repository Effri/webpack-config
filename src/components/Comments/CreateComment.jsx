/** @format */

import React, { useState, useEffect } from "react";

function CreateComment(props) {
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCommentSubmit({
      user: user,
      content: content,
      id: Math.random() * 20,
    });
    setContent("");
    setUser("");
  };
  const handleUserChange = (e) => {
    const text = e.target.value;
    setUser(text);
  };
  const handleTextChange = (e) => {
    const text = e.target.value;
    setContent(text);
  };

  return (
    <form className="comments__new" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={handleUserChange}
      />
      <textarea
        value={content}
        placeholder="Your comment"
        onChange={handleTextChange}
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default CreateComment;
