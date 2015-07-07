import React from "react";

class Messages {
  constructor(props) {
    this.state = {
      messages: props.messages
    };
  }
  message(m) {
    return (
      <div key={m.id}>{m.body}</div>
    );
  }
  render() {
    return (
      <div>{this.state.messages.map(this.message)}</div>
    );
  }
}
module.exports = Messages;
