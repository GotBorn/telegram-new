import React, {Component} from 'react'
import Authorization from './Authorization'

class App extends Component {
    state = {
        token: localStorage.getItem('token'),
    };

    onLogin = (token) =>{
        localStorage.setItem('token', token)
        this.setState({token : token})
    }

    render() {
        if (!this.state.token)
            return <Authorization onLogin = {this.onLogin}/>
        else
            return <Authorization/>   // здесь будет возвращаться окно с чатом
    }   
}   
export default App