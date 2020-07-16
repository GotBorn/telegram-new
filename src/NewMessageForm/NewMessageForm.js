import React from "react"
import  "./NewMessageForm.css";

export default function NewMessageForm(props) {
    return (
        <div className="new-message-form">
            <input className="text-input" type="text" placeHolder="Написать сообещние..." onSubmit={console.log(123)}></input>
            <button className="submit-button" type="submit">Отправить</button>
        </div>
    );
}