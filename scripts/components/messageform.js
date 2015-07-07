import React, {Component} from "react";
import MessageActions from "../actions/message";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {message: {}};
    this._onBodyChange = this._onBodyChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    MessageActions.create(this.state.message);
  }
  _onBodyChange(e) {
    this.setState({message: {body: e.target.value}});
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input onChange={this._onBodyChange} type="text" autoFocus />
        <input type="submit" />
      </form>
    );
  }
}

module.exports = MessageForm;
