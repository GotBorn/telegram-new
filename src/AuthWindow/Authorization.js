import React from "react"
import { getToken } from "../Backend/backend"
import './Auth.css'

export default class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    handleLoginChange(event) {
        this.setState({login: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    onClick(event) {
        event.preventDefault();
        let {login, password} = this.state;
        let currentUserToken = getToken(login, password);
        if (currentUserToken === "") {
            alert("Ошибка входа");
            this.setState({
                login: "",
                password: ""
            });
        }
        else {
            alert(`Добро пожаловать, ${login}`);
            this.props.onLogin(login, currentUserToken);
        }
    }
    render() {
        return (
        <div className="center-container">
            <div className="authorization-block">
                <form>
                    <fieldset>
                        <label for="user-login">Логин</label>
                        <input id="user-login" type="text" value = {this.state.login} onChange = {this.handleLoginChange}></input>
                    </fieldset>
                    <fieldset>
                        <label for="user-password">Пароль</label>
                        <input id="user-password" type="password" value = {this.state.password} onChange = {this.handlePasswordChange}></input>
                    </fieldset>
                    <fieldset>
                        <input id="auth-button" type="submit" onClick={this.onClick} value="Войти"></input>
                    </fieldset>
                </form>
            </div>
        </div>
        );
    }
}