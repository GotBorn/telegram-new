import React from "react";
import "./MessageItem.css";

export function MessageItem(props) {
    let {key, messageData, login} = props;
    let className = "message-item " + (messageData.sender === login ? "mine" : "companion");
    return(
        <div key={key}  className={className}>
            {messageData.text}
        </div>   
    );
}