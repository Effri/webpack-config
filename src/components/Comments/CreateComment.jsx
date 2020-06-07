/** @format */

import React from "react";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user,
      content: this.state.content,
      id: Math.random() * 20,
    });
    this.setState(() => ({
      user: "",
      content: "",
    }));
  }

  handleUserChange(event) {
    const text = event.target.value;
    this.setState(() => ({
      user: text,
    }));
  }

  handleTextChange(event) {
    const text = event.target.value;
    this.setState(() => ({
      content: text,
    }));
  }

  render() {
    return (
      <form className="comments__new" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.user}
          onChange={this.handleUserChange}
        />
        <textarea
          value={this.state.content}
          placeholder="Your comment"
          onChange={this.handleTextChange}
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default CreateComment;
