import React, {Component} from "react";
import Messages from "./components/messages";
import MessageForm from "./components/messageform";
import MessageStore from "./stores/message";
import MessageActions from "./actions/message";
import AppDispatcher from "./appdispatcher";
import GlobalConstants from "./constants/global";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: MessageStore.getAll()};
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    MessageStore.on(GlobalConstants.CHANGE_EVENT, this._onChange);
  }
  componentWillUnmount() {
    MessageStore.removeListener(GlobalConstants.CHANGE_EVENT, this._onChange)
  }
  _onChange() {
    this.setState({
      messages: MessageStore.getAll()
    });
  }
  render() {
    return (
      <div>
        <Messages messages={this.state.messages} />
        <MessageForm />
      </div>
    );
  }
}

React.render(<App />, document.getElementById("root"));
