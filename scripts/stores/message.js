import {EventEmitter} from "events";
import GlobalConstants from "../constants/global"
import AppDispatcher from "../appdispatcher";
import MessageConstants from "../constants/message";
import _ from "lodash";

class MessageStoreClass extends EventEmitter {
  constructor() {
    super();
    this.messages = [];
    //this.ws = new WebSocket("ws://localhost:8080/ws");
    this.ws = new WebSocket("ws://6ea83ef3.ngrok.io/ws");
    this.setWs();
  }
  setWs() {
    this.ws.onmessage = this.onWsNewMessage.bind(this);
  }
  onWsNewMessage(event) {
   try{
      var m = JSON.parse(event.data);
    } catch(e) {
      return;
    }
    this.messages.push(m);
    this.emit(GlobalConstants.CHANGE_EVENT);
  }
  getAll() {
    return this.messages;
  }
  create(message) {
    message.id = _.uniqueId('message');
    this.messages.push(message);
    this.emit(GlobalConstants.CHANGE_EVENT);
    this.ws.send(JSON.stringify(message));
  }
}

var MessageStore = new MessageStoreClass();

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case MessageConstants.MESSAGE_CREATE:
      MessageStore.create(action.message);
      break;
  }
});

module.exports = MessageStore;
