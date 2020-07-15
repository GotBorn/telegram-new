import React from "React";
import {MessageItem} from "../MessageItem/MessageItem";
import "./MessageContainer.css";

export function MessageContainer(props) {
    let {messagesList, login} = props;
    return(
        <div className="messages-field">
            {messagesList.map( (item) => {
                let {messageID} = item;
                return (
                    <MessageItem messageID={messageID} messageData={item} login={login}/>
                );
            })}
        </div>
    );
} 