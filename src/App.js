import React from 'react'
import Authorization from "./AuthWindow/Authorization"
import DialogPage from './DialogPage/DialogPage'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
                login: '',
                token: ''
            };
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(login, token) {
        this.setState({token: token, login: login});
    }
    render() {
        if (!this.state.login && !this.state.token) {
            return <Authorization onLogin = {this.onLogin}/>
        }
        else {
            return <DialogPage login = {this.state.login} token={this.state.token}/> 
        }      
    }   
}