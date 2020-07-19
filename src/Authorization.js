import React, { Component } from 'react'
import './Auth.css'

class Authorization extends Component {
    state = {
        login: '',
        password: '',
        clicked: false,
        error: '',
    };

    handleLogin = (event) => {
        this.setState({ login: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }
// здесь будет отправляться логин с паролем в бэкенд
    /*onClick = async () => {
        this.setState({ clicked: true, error:  "" });
        try {
            let token = await 
            this.props.onLogin(token);
        }
        catch (error) {
            this.setState({error: error.message});
        }
        this.setState({ clicked: false});
    }*/
};

render() {
    return (
    <div class = "Background">
    <div class = "AuthorizationWindow">
    <p>Логин</p>
    <input id = "LoginConteiner" type="text" size="40" value = {this.state.login} onChange = {this.handleLogin}></input>
    <p>Пароль</p>
    <input id = "PasswordConteiner" type="text" size="40" value={this.state.password} onChange={this.handlePassword} ></input>
    <br></br>
    <button id = "AuthButton">Войти</button>
    </div>
    </div>
    );
    }

    export default Authorization