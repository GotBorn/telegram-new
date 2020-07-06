import React from 'react';
import './style.css';

function App() {
  return (
      <div class = "Background">
          <div class = "AuthorizationWindow">
              <p>Логин</p>
              <input id = "LoginConteiner" type="text" size="40"></input>
              <p>Пароль</p>
              <input id = "PasswordConteiner" type="text" size="40"></input>
              <br></br>
              <button id = "AuthButton">Войти</button>
          </div>
      </div>
  );
}

export default App;
