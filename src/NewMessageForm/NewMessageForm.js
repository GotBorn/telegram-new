import React from "react"
import {sendMessage} from "../Backend/backend"
import  "./NewMessageForm.css"

export default class NewMessageForm extends React.Component {
    constructor(props) {
        super(props); //author, dialogID
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        sendMessage(this.props.author, this.state.value);
        this.setState({
            value: ''
        });
    }
    render() {
        return(
            <form className="new-message-form">
            <textarea className="text-input" value={this.state.value} 
                onChange={this.handleChange} /*onSubmit={this.handleSubmit}*/
                placeholder="Написать сообещние...">
            </textarea>
            <button className="submit-button" onClick={this.handleSubmit} type="submit">Отправить</button>
        </form>  
        );  
    }
}