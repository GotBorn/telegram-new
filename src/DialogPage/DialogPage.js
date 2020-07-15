import React from 'react';
import './DialogPage.css';
import {getMessages, addMessage} from "../Backend/backend";
import {MessageContainer} from "../MessageContainer/MessageContainer"
//import {addMessage} from '/backend/backend.js'
export default class DialogPage extends React.Component {
    constructor(props) {
        super(props); // вызываю конструктор для пропсов из материнского класса
        this.state = {
            messagesList: [] // тут должен быть "запрос" на сервер для загрузки истории сообщений
        }
        this.loadMessages = this.loadMessages.bind(this);
    }
    loadMessages(token) {
        this.setState({messagesList: getMessages(this.props.token)}); // заглушка для эмуляции бэкенда
        //getMessages(this.props.token);
    }
    componentDidMount(token) {
        /*this.setState({messagesList: getMessages(this.props.token)});*/
        this.loadMessages(token);
    }
    render(){
        let {messagesList} = this.state;
        let {login} = this.props;
        return(
            <div className="main-wrap">
                <div className="left-container">
                    <div className ="topics-container">
                        ЗАГЛУШКА, ТУТ БУДЕТ СПИСОК ДИАЛОГОВ
                    </div>
                </div>
                <div className="right-container">
                    <CompanionNameContainer />
                    <MessageContainer messagesList={messagesList} login={login}/>
                    <NewMessageForm />
                </div>   
            </div> 
        );
    }

} 