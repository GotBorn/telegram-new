import React from "React";
import "./MessageItem.css";

export function MessageItem(props) {
    let {messageID, messageData, login} = props;
    let className = "message-item " + (messageData.author === login ? "mine" : "companion");
    return(
        <div key={messageID}  className={className}>
            {messageData.text}
        </div>   
    );
}