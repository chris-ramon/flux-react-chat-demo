import AppDispatcher from "../appdispatcher";
import MessageConstants from "../constants/message"

var MessageActions = {
  create(message) {
    AppDispatcher.dispatch({
      actionType: MessageConstants.MESSAGE_CREATE,
      message: message
    });
  }
};

module.exports = MessageActions;
