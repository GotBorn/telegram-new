import React from "react";
import "./MessageItem.css";

export function MessageItem(props) {
    let {messageData, login} = props;
    let className = "message-item " + (messageData.sender === login ? "mine" : "companion");
    return(
        <div className={className}>
            {messageData.text}
        </div>   
    );
}