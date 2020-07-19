import React from 'react';
import './DialogPage.css';
//import {getMessages, addMessage} from "../Backend/backend";
import CompanionNameContainer from "../CompanionNameContainer/CompanionNameContainer.js"
import MessageContainer from "../MessageContainer/MessageContainer"
import NewMessageForm from "../NewMessageForm/NewMessageForm"
export default class DialogPage extends React.Component {
    constructor(props) {
        super(props); // login, token
        this.state = {
            companionName: "bot1",
            dialogID: ""
        }
      //  this.loadMessages = this.loadMessages.bind(this);
    }
    render(){
     //   let {messagesList} = this.state;
        let {login} = this.props;
        let {companionName, dialogID} = this.state;
        return(
            <div className="main-wrap">
               { /*<div className="left-container">
                    <div className ="topics-container">
                        ЗАГЛУШКА, ТУТ БУДЕТ СПИСОК ДИАЛОГОВ
                    </div> 
        </div> */}
                <div className="right-container">
                    <CompanionNameContainer companionName={companionName}/>
                    <MessageContainer login={login} companionName={companionName} dialogID ={dialogID}/>
                    <NewMessageForm author={login} dialogID={dialogID}/>
                </div>   
            </div> 
        );
    }
} 