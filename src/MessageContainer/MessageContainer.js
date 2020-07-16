import React from "react";
import {MessageItem} from "../MessageItem/MessageItem";
import {getMessages} from "../Backend/backend";
import "./MessageContainer.css";

export default class MessageContainer extends React.Component {
    constructor(props) {
        super(props); // login, companionName, currentDialogID
        this.state = {
            messagesList: [] // тут должен быть "запрос" на сервер для загрузки истории сообщений
        }
        this.loadMessages = this.loadMessages.bind(this);
    }
    loadMessages() {
        this.setState({messagesList: getMessages(this.props.currentDialogID)}); // заглушка для эмуляции бэкенда
    }
    componentDidMount() {
        setInterval(this.loadMessages, 1000);
    }
    render() {
        let {messagesList} = this.state;
        let {login} = this.props;
        return(
            <div className="messages-field">
                {messagesList.map( (item) => {
                    let {messageID} = item;
                    return (
                        <MessageItem key={messageID} messageData={item} login={login}/>
                    );
                })}
            </div>
        );
    } 
}